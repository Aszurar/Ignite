import React from 'react';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

import {
    Container, 
    Content, 
    DateInfo, 
    DateTitle, 
    DateValue, 
    Footer, 
    Header,
    RentalPeriod,
    Title
} from './styles';
import { StatusBar } from 'react-native';
import { SubmitButton } from '../../components/SubmitButton';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){
    const theme = useTheme();
    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"                />
                <BackButton 
                    color={theme.colors.background_secondary}
                />
                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <SubmitButton 
                    text="Confirmar"
                    greenBackground={false}
                    disabled={false}
                />
            </Footer>
        </Container>
    );
}