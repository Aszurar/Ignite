import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeConainer, RadioBox } from './styles';
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal( {isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions(); 
    // resgatando a função que cria a requisição
    // de criar uma nova transação, adiciona no contexto das transações 
    // e envia para o back-end para que seja salva no MirageJS

    const [type, setType] = useState('deposit');
     // sempre que for guardar a informação de um clique ou algo semelhante, é necessário guardar em um Estado
    // O Estado pode ser deposit ou withdraw!.  

    // Para salvar os dados do input de um formuçário, é necessário primeiro guarda-los dentro de um Estado
    // Assim, para cada input, criamos uma variável Estado diferente e guardemos nelas
    // É necessário ressaltar que a variável Estado sempre deve começar com u valor padrão que explicite o tipo
    // de dado que ela guardará
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        // função que guardará os dados inseridos pelo usuário no formulário para enviar para o back-end
        // É dispara sempre que o formulário ter um submit(o o usuário clicar no botão de submit ou apertar enter no formulário)
        // É importante ressaltar que o nosso formulário é o componente Container
        // Toda função que é usada em uma propriedade React receberá todos os parâmetros que essa propriedade React originalmente recebe
        // Com isso, essa função recebe também o event do onSubmit que lida com o funcionamento do formulário.
        // Assim podemos utilizar o event para alterar o comportamento padrão do formulário HTML de sempre recarregar a página quando algo
        // é submetido
        event.preventDefault();
        // Resgatando o evento de submit do formulário HTML e evitando seu funcionamento padrão de recarregar a página sempre que o usuário submeter algo.
        // agora o tracho de criar a requisição Post de enviar os dados para o back-end está dentro do Contexto de transações
        await createTransaction({
            title,
            amount, 
            category,
            type,
        })
        // utilizamos o await para aguardar a inserção e só dps continuar a função que ir´afechar o model, garantindo assim que os dados
        // sejam guardados

        // resetando os inputs 
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }
    return (
        <Modal
        isOpen={isOpen} // propriedade que definirá se o modal esta aberto ou fechado
        onRequestClose={onRequestClose} // propriedade que recebe a função que fecha o modal
        overlayClassName="react-modal-overlay" // ´propriedade que recebe uma nova classe que alterará toda estilização fora do modal
        className="react-modal-content" // propriedade que receberá uma classe para alterar toda estilização do conteúdo do Modal
        >
            <button type="button"
            onClick={onRequestClose} // função que muda o Estado do Modal para fechado
            className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar cadastro"/>
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Informação</h2>

                <input type="text" 
                autoComplete="on"
                name="name"
                placeholder="Título"
                value={title} // mostranso ao usuário o valor inserido no input
                onChange={event => setTitle(event.target.value)} // Atualizando o Estado do title toda vez que for digitado um valor diferente
                />

                <input type="number" 
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))} 
                // O event.target.value sempre retorna o valor do input como uma string,
                // Dessa forma, é necessário converter esse valor para um tipo número já que o input é numérico
                />

                <TransactionTypeConainer>
                    <RadioBox type="button"
                            onClick={() => {setType('deposit')}}
                            isActive={type === 'deposit'}
                            activeColor="green"
                            // {/* temos que definir no styled.compoenents essas 2 últimas propriedades que criamos em uma interface*/}
                            >
                            <img src={incomeImg} alt="Entrada"/>
                            <span>Entrada</span>
                    </RadioBox>   

                    <RadioBox type="button"
                            onClick={() => {setType('withdraw')}}
                            isActive={type === 'withdraw'}
                            activeColor="red"
                            >
                            <img src={outcomeImg} alt="Saída"/>
                            <span>Saída</span>
                    </RadioBox>
                </TransactionTypeConainer>

                <input type="text" 
                placeholder="Categoria"
                value={category}
                onChange={event =>setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    ); 
}
