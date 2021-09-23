import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { VictoryPie } from 'victory-native'
import { HistoryCard } from '../../components/HistoryCard';
import { DataTransactionCardProps } from '../Dashboard';
import { categories } from '../utils/category';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
    Container,
    Content,
    ChartContainer,
    Header,
    MonthSelect,
    MonthSelectButton,
    MonthSelectButtonIcon,
    MonthText,
    Title,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { LoadingStyle } from '../../components/LoadingStyle';
import { useAuth } from '../../hooks/auth';

interface AmountTotalByCategoryListProps {
    key: string;
    name: string;
    color: string;
    total: number;
    percent: string;
    totalFormatted: string;
}

export function Resume() {
    const [amountTotalByCategoryList, setAmountTotalByCategoryList] = useState<AmountTotalByCategoryListProps[]>([]);
    const [selectDate, setSelectDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();
    const theme = useTheme();
    
    function handleDateChange(action: 'prev' | 'next') {
        if (action === 'prev') {
            setSelectDate(subMonths(selectDate, 1));
        } else if (action === 'next') {
            setSelectDate(addMonths(selectDate, 1));
        }
    }
    
    async function loadData() {
        setIsLoading(true);

        const dataKey = `@gonfinances:transactions_user:${user.id}`;
        const response = await AsyncStorage.getItem(dataKey);
        const responseFormatted: DataTransactionCardProps[] = response ? JSON.parse(response) : [];
        const expensives = responseFormatted
        .filter(transaction => 
            transaction.type === "down" 
            &&
            new Date(transaction.date).getMonth() === selectDate.getMonth() &&
            new Date(transaction.date).getFullYear() === selectDate.getFullYear()
        );

        const amountTotalCategoryList: AmountTotalByCategoryListProps[] = [];

        const expensivesTotal = expensives
            .reduce((acc, transaction) => { return acc + Number(transaction.amount) }
                , 0);

        categories.forEach(category => {
            let amountTotalCategory = 0;

            expensives.forEach(transaction => {

                if (category.key === transaction.category) {
                    amountTotalCategory += Number(transaction.amount);
                }
            });
            const percentageByCategory = (amountTotalCategory / expensivesTotal) * 100;
            const percentageByCategoryFormatted = `${percentageByCategory.toFixed(1)}%`

            const amountTotalCategoryFormatted = amountTotalCategory
                .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });


            if (amountTotalCategory > 0) {
                amountTotalCategoryList.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total: amountTotalCategory,
                    percent: percentageByCategoryFormatted,
                    totalFormatted: amountTotalCategoryFormatted,
                })
            }


        });

        setAmountTotalByCategoryList(amountTotalCategoryList);
        setIsLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadData();
    }, [selectDate]))

    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            {
            isLoading ? 
                <LoadingStyle />
           :
                <Content
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: RFValue(24),
                    paddingBottom: useBottomTabBarHeight(),
                }}
                >

                    <MonthSelect>
                        <MonthSelectButton 
                            onPress={() => handleDateChange('prev')}
                        >
                            <MonthSelectButtonIcon name="chevron-left" />
                        </MonthSelectButton>

                        <MonthText>
                            {
                                format(selectDate, "MMMM, yyyy", {locale: ptBR})
                            }
                        </MonthText>

                        <MonthSelectButton
                            onPress={() => handleDateChange('next')}
                        >
                            <MonthSelectButtonIcon name="chevron-right" />
                        </MonthSelectButton>
                    </MonthSelect>

                    <ChartContainer>
                        <VictoryPie
                            data={amountTotalByCategoryList}
                            colorScale={amountTotalByCategoryList.map(category => category.color)}
                            x="percent"
                            y="total"
                            style={{
                                labels: {
                                    fontSize: RFValue(18),
                                    fontWeight: 'bold',
                                    fill: theme.colors.shape
                                }
                            }}
                            labelRadius={50}
                        />
                    </ChartContainer>

                        {
                            amountTotalByCategoryList
                                .map(category =>

                                    <HistoryCard
                                        key={category.key}
                                        color={category.color}
                                        title={category.name}
                                        amount={category.totalFormatted}
                                    />
                                )
                        }
            </Content>
}
        </Container>
    )
}