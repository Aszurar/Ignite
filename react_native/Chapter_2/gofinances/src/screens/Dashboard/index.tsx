import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
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
    LogoutIconButton,
    LoadingStyle
} from './styled';

interface HighlightCardProps {
    deposit: string;
    expensive: string;
    total: string;
}
export interface DataTransactionCardProps extends DataProps{
    id: string;
}

export function Dashboard() {
    const [data, setData] = useState<DataTransactionCardProps[]>([]);
    const [highlightCardsData, setHilightCardsData] = useState<HighlightCardProps>({} as HighlightCardProps);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();

    async function loadData() {
        const dataKey = "@gonfinances:transactions";
        let expensiveSum = 0;
        let depositSum = 0;
        const response = await AsyncStorage.getItem(dataKey);
        
        const transactions: DataTransactionCardProps[] = response ? JSON.parse(response) : [];
        
        const transactionsFormatted: DataTransactionCardProps[] = 
        transactions.map((transaction: DataTransactionCardProps) => {
            if (transaction.type === 'up') {
                depositSum = depositSum + Number(transaction.amount);
            } else {
                expensiveSum = expensiveSum + Number(transaction.amount);    
            }

            const amount = Number(transaction.amount)
            .toLocaleString('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
            );

   
            
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

        const depositSumFormatted = Number(depositSum)
        .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
        
        const expensiveSumFormatted = Number(expensiveSum)
        .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
        
        let totalAmount = depositSum - expensiveSum;

        const totalAmountFormatted = Number(totalAmount)
        .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        setHilightCardsData(
            {
                deposit: depositSumFormatted,
                expensive: expensiveSumFormatted,
                total: totalAmountFormatted,
            }
        );

        console.log(highlightCardsData.deposit);
        console.log(highlightCardsData.expensive);
        console.log(highlightCardsData.total);

        setIsLoading(false);
    }
    // async function removeAll(){
    //     const dataKey = "@gonfinances:transactions";
    //     await AsyncStorage.removeItem(dataKey);
    // }
    useEffect(() => {
        // removeAll();
        loadData();
                

    }, [])

    useFocusEffect(useCallback(() => {
        loadData();
    }, 
    []));

    return (
        <Container>
            { isLoading ? 
            <LoadingStyle>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </LoadingStyle>
            :
                <>
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
                        <HighlightCard type="up" title="Entradas" amount={highlightCardsData.deposit} lastTransaction="Última entrada dia 13 de abril" />
                        <HighlightCard type="down" title="Saídas" amount={highlightCardsData.expensive} lastTransaction="Última saída dia 03 de abril" />
                        <HighlightCard type="total" title="Total" amount={highlightCardsData.total} lastTransaction="01 à 16 de abril" />
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
                </>
            } 
        </Container>
    )
}