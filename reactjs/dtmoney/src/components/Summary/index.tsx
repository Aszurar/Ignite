import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";
export function Summary() {
    const { transactions } = useTransactions();
    // usando o contexto ara resgatar as transações
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === "deposit") {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount; 
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        } 

        return acc;
    }, 
    { 
        deposit: 0,
        withdraw: 0,
        total: 0,
    })
    
return (
    <Container>
        {/* No uso do Consumer para acessarmos o contexto aqui podem ser feitos de 2 formas:
        1. Método Antigo -> Usando uma api que é uma função que recebe como parâmetros os dados(data)
            guardados no contexto e retorna o que deve ser renderizado com eles;
            <TransactionsContext.Consumer>
            {(data) =>{
                return (
                    <ul>
                    </ul>
                )
            }}
            </TransactionsContext.Consumer>
        2. Melhor Método -> Usando o useContext
            const data = useContext(TransactionsContext);
            // O useContext recebe como parâmetro o Contexto a ser usado
            // Não fica envolto do TransactionsContext.Consumer
            // é definito antes do return do componente
            // Para usar o Consumer em outro componente e assim acessar o contexto,
            // basta escrever da mesma forma!
        */}


        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas"/>
            </header>
            <strong>{ new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(summary.deposit)}</strong>
        </div>

        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas"/>
            </header>
            <strong>{ new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(summary.withdraw)}</strong>
        </div>

        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total"/>
            </header>
            <strong>{summary.total}</strong>
        </div>
    </Container>
    );

}