import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";



export function TransactionsTable() {
    const { transactions }  = useTransactions();
    // usando o contexto para resgatar as transações, no caso a lista de transações
    // 

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