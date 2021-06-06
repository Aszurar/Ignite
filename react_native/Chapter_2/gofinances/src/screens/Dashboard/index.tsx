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
                <HighlightCard title="Entradas" icon="arrow-up" amount="R$ 17.000,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard title="Saídas" icon="arrow-down" amount="R$ 1.259,00" lastTransaction="" />
                <HighlightCard title="Total" icon="" amount="R$ 16.141,00" lastTransaction="" />

            </HighlightCards>
        </Container>
    )
}