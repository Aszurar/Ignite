import React from 'react';
import { 
    Amount,
    Container, 
    DepositIcon, 
    Footer, 
    Header, 
    LastTransaction, 
    Title, 
} from './styles';

interface HighlightCardProps {
    title: string;
    icon: string;
    amount: string;
    lastTransaction: string;
}

export function HighlightCard({ title, icon, amount, lastTransaction }: HighlightCardProps){
    return(
        <Container>
            
            <Header>
                <Title>{title}</Title>
                <DepositIcon name={icon}/>
            </Header>
            
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>

        </Container>
    )
}