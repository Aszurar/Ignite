import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [ transactions, setTransactions] = useState<Transaction[]>([]);
    // definimos uma variável Estado que receberá todos os dados do back-end(nosso servidor fictício, no caso todas instâncias de transações)
    // Quando uma variável Estado é um objeto ou um array, ou um array de objetos temos que definir seu tipo com uma interface
    useEffect(() => {
        api.get('transactions') // realizando a requisição de listagem de recursos
        .then(response => setTransactions(response.data.transactions)
        // atualizando o Estado transactions com a listagem de todas transações que estão na tabela de transações no MirageJS
        ) 
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{ new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.amount)}</td>
                                {/* fprmatando os valores em reais com $ e , */}
                                <td>{transaction.category}</td>
                                <td>{ new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt))}</td>
                                    {/* formatando os valores em datas dia/mês/ano 
                                    É necessário que a data esteja em timestamp, por isso usamos o new Date para converter-la*/}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </Container>
    );
}