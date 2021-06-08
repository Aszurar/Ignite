import React from 'react';
import { HighlightCard } from '../../components/HighlightCard'
import {
    Container,
    Head,
    Header,
    HighlightCards,
    Photo,
    PowerIcon,
    User,
    UserGreeting,
    UserInfo,
    UserName
} from './styled';

export function Dashboard() {
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
        </Container>
    )
}