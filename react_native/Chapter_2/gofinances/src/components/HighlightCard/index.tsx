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

export function HighlightCard(){
    return(
        <Container>
            
            <Header>
                <Title>Entradas</Title>
                <DepositIcon name="arrow-up"/>
            </Header>
            
            <Footer>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Última entrada em 13 de abril</LastTransaction>
            </Footer>

        </Container>
    )
}