import React from 'react';
import { 
    Amount,
    Container, 
    EvilIcon,
    FeatherIcon, 
    Footer, 
    Header, 
    LastTransaction, 
    Title, 
} from './styles';

interface HighlightCardProps {
    type: 'up' | 'down' | 'total'; 
    title: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    up: 'arrow-up',
    down: 'arrow-down',
    total: 'dollar-sign',
}

export function HighlightCard({ 
    type, 
    title, 
    amount, 
    lastTransaction 
}: HighlightCardProps)

{
    return(
        <Container type={type}>
            
            <Header>
                <Title type={type}>
                {title}
                </Title>
                { type === 'total'  ? 
                  <FeatherIcon name={icon[type]} /> : 
                  <EvilIcon name={icon[type]} type={type}/>
                }
            </Header>
            
            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Footer>

        </Container>
    )
}