import React from 'react';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation<any>();

    function handleShedulingDetails(){
        navigation.navigate('SchedulingDetails');
    }
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
                        <DateValue selected={false}>18/06/2021</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={false}>18/06/2021</DateValue>
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
                    onPress={handleShedulingDetails}
                />
            </Footer>
        </Container>
    );
}