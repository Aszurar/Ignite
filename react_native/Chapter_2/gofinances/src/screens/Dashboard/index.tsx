import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, DataProps } from '../../components/TransactionCard';
import {
    Container,
    Head,
    Header,
    HighlightCards,
    ListTransaction,
    Photo,
    PowerIcon,
    Transaction,
    TitleTransaction,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    LogoutIconButton
} from './styled';

export interface DataTransactionCardProps extends DataProps{
    id: string;
}

export function Dashboard() {
    const [data, setData] = useState<DataTransactionCardProps[]>([]);

    async function loadData() {
        const dataKey = "@gonfinances:transactions";

        const response = await AsyncStorage.getItem(dataKey);
        const transactions: DataTransactionCardProps[] = response ? JSON.parse(response) : [];
        const transactionsFormatted: DataTransactionCardProps[] = 
        transactions.map((transaction: DataTransactionCardProps) => {
            const amount = Number(transaction.amount)
            .toLocaleString('pt-BR',
                {
                    style: 'currency',
                    currency: 'BRL'
                }
            );
            console.log(transaction);
            
            const date = Intl.DateTimeFormat('pt-BR', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }).format(new Date(transaction.date));

            return {
                id: transaction.id,
                type: transaction.type,
                name: transaction.name,
                date,
                amount: amount,
                category: transaction.category,
            }

        });

        setData(transactionsFormatted);
    }
    // async function removeAll(){
    //     const dataKey = "@gonfinances:transactions";
    //     await AsyncStorage.removeItem(dataKey);
    // }
    useEffect(() => {
        // removeAll();
        loadData();
        
    }, [])

    return (
        <Container>
            <Header>
                <Head>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/64987824?s=400&u=51e8a76f68447d04bb10d3f57e77df673874bad6&v=4' }} />

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Lucas de Lima</UserName>
                        </User>

                    </UserInfo>

                    <LogoutIconButton>
                        <PowerIcon name="power" />
                    </LogoutIconButton>
                </Head>
            </Header>
            <HighlightCards>
                <HighlightCard type="up" title="Entradas" amount="R$ 17.000,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 03 de abril" />
                <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" />
            </HighlightCards>

            <Transaction>
                <TitleTransaction>Listagem</TitleTransaction>

                <ListTransaction 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={ 
                        ({ item }) => <TransactionCard data={ item }/> 
                    }
                />
            </Transaction>

        </Container>
    )
}