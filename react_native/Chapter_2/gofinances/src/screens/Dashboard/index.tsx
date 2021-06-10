import React from 'react';
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
    UserName
} from './styled';

export interface DataTransactionCardProps  extends DataProps{
    id: string;
}

export function Dashboard() {
    const data: DataTransactionCardProps[] = [
        {
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site", 
            amount:"R$ 12.000,00",
            date:"13/04/2020",  
            category: {
                name:"Vendas",
                icon: "dollar-sign",
            }
        }, 
        {
            id: '2',
            type: 'negative',
            title:"Hamburgueria Pizzy", 
            amount:"R$ 59,00",
            date:"13/04/2020",
            category: {
                name:"Alimentação",
                icon: "coffee",
            },
        }, 
        {
            id: '3',
            type: 'negative',
            title:"Aluguel de Apartamento", 
            amount:"R$ 500,00",
            date:"13/04/2020",
            category: {
                name:"Casa",
                icon: "home",
            },
        }
    ]

    return (
        <Container>
            <Header>
                <Head>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/64987824?s=400&u=51e8a76f68447d04bb10d3f57e77df673874bad6&v=4' }} />

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Lucas de Lima</UserName>
                        </User>

                    </UserInfo>
                    <PowerIcon name="power" />
                </Head>
            </Header>
            <HighlightCards>
                <HighlightCard type="up" title="Entradas" amount="R$ 17.000,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 03 de abril" />
                <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" />
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

        </Container>
    )
}