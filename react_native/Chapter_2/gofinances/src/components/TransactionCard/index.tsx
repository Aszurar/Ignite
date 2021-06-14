import React from 'react';
import 
{ 
    Container, 
    Title, 
    Amount, 
    Category,
    CategoryName,
    Date, 
    Footer,
    Icon, 
} from './styles';

interface CategoryProps {
    name: string;
    icon: string;
}

export interface DataProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    date: string;
    category: CategoryProps;
}

interface TransactionCardProps {
    data: DataProps;
}

export function TransactionCard({ 
    data,
 }: TransactionCardProps) {
   const {type, category, title, amount, date } = data;
   const {name, icon} = category;
    return (
    <Container>
            <Title>{title}</Title>
            <Amount type={type}> 
                {type === 'negative' && '- '}
                {amount}
             </Amount>
            <Footer>
                <Category>
                    <Icon name={icon} />
                    <CategoryName>{name}</CategoryName>
                </Category>

                <Date>{date}</Date>
            </Footer>
    </Container>
    )     

}