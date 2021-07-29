import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import { DataTransactionCardProps } from '../Dashboard';
import { categories } from '../utils/category';
import { Container, Header, Title, TransactionTypesList } from './styles';

interface AmountTotalByCategoryListProps {
    key: string;
    name: string;
    color: string;
    total: string;
}

export function Resume() {
    const [amountTotalByCategoryList, setAmountTotalByCategoryList] = useState<AmountTotalByCategoryListProps[]>([]);

    async function loadData(){
        const dataKey = "@gonfinances:transactions";
        const response = await AsyncStorage.getItem(dataKey);
        const responseFormatted: DataTransactionCardProps[] = response ? JSON.parse(response) : [];

        const expensives = responseFormatted.filter(transaction => transaction.type === "down");
        const amountTotalCategoryList: AmountTotalByCategoryListProps[] = [];
        
        categories.forEach(category => {
            let amountTotalCategory = 0;
            
            expensives.forEach(transaction => {

                if (category.key === transaction.category) {
                    amountTotalCategory += Number(transaction.amount);
                }
            });

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
                    total: amountTotalCategoryFormatted,
                })
            }

            
        });

        setAmountTotalByCategoryList(amountTotalCategoryList);
    }

    useEffect(() => {
        loadData();
        
    }, []);

    useFocusEffect(() => {
        loadData();
    });

    return(
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>


            <TransactionTypesList>
                {
                    amountTotalByCategoryList
                    .map(category => 
                        
                        <HistoryCard 
                            key={category.key}
                            color={category.color} 
                            title={category.name} 
                            amount={category.total}
                        />
                    )
                }
            </TransactionTypesList>
            
        </Container>
    )
}