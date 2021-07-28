import React from 'react';
import { View } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';
import { Container, Header, Title, TransactionTypesList } from './styles';

export function Resume() {
    return(
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <TransactionTypesList>
                <HistoryCard color={"purple"} title={"Casa"} amount={"R$ 1.200,00"}/>
            </TransactionTypesList>
            
        </Container>
    )
}