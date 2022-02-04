import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { Alert, StatusBar } from 'react-native';
import { SubmitButton } from '../../components/SubmitButton';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatform';
import { Params } from '../CarDetails';

interface RentalPeriodProps {
    startFormatted: string;
    endFormatted: string;
}

export function Scheduling(){
    const theme = useTheme();
    
    const navigation = useNavigation<any>();
    const { params } = useRoute();
    const { car } = params as Params;

    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)
    
    function handleShedulingDetails(){
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        });
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
        })

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
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>
                    <ArrowSvg />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar 
                    onDayPress={handleChangeDate}
                    markedDates={markedDates}
                />
            </Content>

            <Footer>
                <SubmitButton 
                    text="Confirmar"
                    greenBackground={false}
                    onPress={handleShedulingDetails}
                    enabled={!!rentalPeriod.startFormatted}
                />
            </Footer>
        </Container>
    );
}