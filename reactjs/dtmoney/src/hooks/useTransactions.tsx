// Para o uso de contexto é necessário criar um arquivo.ts separado
// na raiz do projeto
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
// método responsáveç por criar o contexto.ts
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
     {} as TransactionsContextData
)
//  É necessário definir o valor inicial do contexto
// assim como fazemos com o UseState
// Nesse caso, como esse contexto será um lista de transações
// então definiremos como um array que será do tipo de Transações.

// Esse contexto será acessável a partir de qualquer componente da aplicação
// A única regra para os outros componentes conseguirem acessar o contexto
// é necessário que envolver esses componentes com o Provider que é obtido
// pelo próprio contexto:
// TransactionsContext.Provider
// Quando um contexto é acessado em diversos componentes da aplicação
// então, para facilitar, pode-se envolver logoo componente principal
// o App que já englobará todos os demais componentes que utilizaram 
// o contexto e assim evitar de ficar colocando Provider em cada componente
// que usará o contexto 
// Se quisessemos que só determinados Componentes tivessem acesso ao contexto
// então só usuaríamos o ´Provider nesses compoenetes e não no App

// Outra propriedade que será usada do Contexto(TransactionsContext) é o Consumer
// TransactionsContext.Consumer
// Essa propriedade será usada em todo componete que for utilizar o contexto

// Nós vamos transformar esse contexto em um componente no React que retornará um novo Provider definido por nós
// que já terá carregado os dados do back-end em uma variável Estado 
// Como estamos criando um componente React que ficará envolvendo outros componentes React, temos que definir que ele pode
// envolver esses componentes react, para isso, usamos o children tipado como ReactNode do React e passamos dentro do Provider.



type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 
// extendendo a tipagem Transaction para TransactionInput omitindo os atributos id e createdAt com o Omit
// poderia usar o  Pick que faz o inverso do Omit, ele adiciona campos e não remove, o Omit ele remove
// os campos.

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [ transactions, setTransactions] = useState<Transaction[]>([]);
    // definimos uma variável Estado que receberá todos os dados do back-end(nosso servidor fictício, no caso todas instâncias de transações)
    // Quando uma variável Estado é um objeto ou um array, ou um array de objetos temos que definir seu tipo com uma interface
    useEffect(() => {
        api.get('transactions') // realizando a requisição de listagem de recursos
        .then(response => setTransactions(response.data.transactions)
        // atualizando o Estado transactions com a listagem de todas transações que estão na tabela de transações no MirageJS
        ) 
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
       const response = await api.post('/transactions', {
           ...transactionInput,
           createdAt: new Date(),
        });
        // passando também a data da criação da transação para o back-end

        // Enviando para a rota de transações todos os dados do formulário!.
        // É necessário que se tenha uma rota POST de transactions!
        // tranformamos essa requisição em assíncrona pois precisamos aguardar ela ocorrecar para continuar essa função.
        const { transaction } = response.data;
        setTransactions([...transactions, transaction]);
        // atualizando o contexto com a nova transação
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {/* {/* TransactionsContext é um objeto */}
      {/* O provider recebe uma propriedade chamada value
      Essa propriedade recebe o valor atual do contexto, aquele que é
      carregado de uma Api, do back-end ou algo do tipo*/}
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    // Definindo o contexto de transactions aqui para se evitar de utilizar importações de useContext e do TransactionsContext
    // em todos arquivos que utilizam esse contexto 
    // Os hooks devem começar com use junto com algum nome depois
    // Esses hookes devem usar outros hooks do React como useState, useEffect
    return context;
}