import React from 'react';
import { HighlightCard } from '../../components/HighlightCard'

import {
    // CardContainer,
    CardsContainer,
    CardHead,
    CardHistoryText,
    CardValueText,
    CardTitle,
    Container,
    DepositIcon,
    Head,
    Header,
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
            <CardsContainer>
                <HighlightCard />

                {/* <CardContainer>
                    <CardHead>
                        <CardTitle>Entrada</CardTitle>
                        <DepositIcon name="arrow-up"></DepositIcon>
                    </CardHead>

                    <CardValueText>R$ 17.400,00</CardValueText>
                    <CardHistoryText>Última entrada dia 13 de abril</CardHistoryText>
                </CardContainer> */}

            </CardsContainer>
        </Container>
    )
}