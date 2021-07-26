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

interface HighlightCardElementProps {
    amount: string;
    lastTransactionDate: string;
}

interface HighlightCardProps {
    deposit: HighlightCardElementProps;
    expensive: HighlightCardElementProps;
    total: HighlightCardElementProps;
}
export interface DataTransactionCardProps extends DataProps{
    id: string;
}

export function Dashboard() {
    const [data, setData] = useState<DataTransactionCardProps[]>([]);
    const [highLightCardsData, setHiLightCardsData] = useState<HighlightCardProps>({} as HighlightCardProps);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();

    function getLastTransactionDate(transactions: DataTransactionCardProps[], type: 'up' | 'down') {
        const lastTransactionDate = new Date(Math.max
        .apply(Math, transactions
        .filter(transaction => transaction.type === type)
        .map(transaction => new Date(transaction.date).getTime())));
        
        const lastTransactionDateMonth = lastTransactionDate
        .toLocaleString('pt-BR', {
            month: 'long',
        })
        const lastTransactionDateDay = lastTransactionDate.getDate();

        return `dia ${lastTransactionDateDay} de ${lastTransactionDateMonth}`;
    }

    async function loadData() {
        const dataKey = "@gonfinances:transactions";
        let expensiveSum = 0;
        let depositSum = 0;
        const response = await AsyncStorage.getItem(dataKey);
        
        const transactions: DataTransactionCardProps[] = response ? JSON.parse(response) : [];

        //rescue the last transactions date
        const lastTransactionDepositDate = getLastTransactionDate(transactions, 'up');
        const lastTransactionExpensiveDate = getLastTransactionDate(transactions, 'down');
        const lastTransactionTotalDate = `01 à ${lastTransactionExpensiveDate}`;
        
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

        setHiLightCardsData(
            {
               deposit: {
                    amount: depositSumFormatted,
                    lastTransactionDate: `Última entrada ${lastTransactionDepositDate}`,
               },
               expensive: {
                    amount: expensiveSumFormatted,
                    lastTransactionDate: `Última saída ${lastTransactionExpensiveDate}`,
               },
               total: {
                    amount: totalAmountFormatted,
                    lastTransactionDate: lastTransactionTotalDate,
               }
            });

        setIsLoading(false);
    }
    async function removeAll(){
        const dataKey = "@gonfinances:transactions";
        await AsyncStorage.removeItem(dataKey);
    }
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
                        <HighlightCard type="up" title="Entradas" amount={highLightCardsData.deposit.amount} lastTransaction={highLightCardsData.deposit.lastTransactionDate}/>
                        <HighlightCard type="down" title="Saídas" amount={highLightCardsData.expensive.amount} lastTransaction={highLightCardsData.expensive.lastTransactionDate}/>
                        <HighlightCard type="total" title="Total" amount={highLightCardsData.total.amount} lastTransaction={highLightCardsData.total.lastTransactionDate} />
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