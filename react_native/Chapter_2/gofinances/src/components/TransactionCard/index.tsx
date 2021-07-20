import React from 'react';
import { categories } from '../../screens/utils/category';
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
export interface DataProps {
    type: 'up' | 'down';
    date: string;
    name: string;
    amount: string;
    category: string;
}

interface TransactionCardProps {
    data: DataProps;
}

export function TransactionCard({ 
    data,
 }: TransactionCardProps) {
   const {type, category, name, amount, date } = data;
   const categoryObj = categories.find(item => item.key === category);
    return (
    <Container>
            <Title>{name}</Title>
            <Amount type={type}> 
                {type === 'down' && '- '}
                {amount}
             </Amount>
            <Footer>
                <Category>
                    <Icon name={categoryObj!.icon} />
                    <CategoryName>{categoryObj!.name}</CategoryName>
                </Category>

                <Date>{date}</Date>
            </Footer>
    </Container>
    )     

}