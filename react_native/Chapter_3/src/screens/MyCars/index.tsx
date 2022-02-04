import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import { CarCards } from '../../components/CarCards';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { Load } from "../../components/Load";

import {
    ArrowCard,
    Container, 
    Description, 
    Header, 
    InfoContainer, 
    MyCarsList, 
    RentalDate, 
    RentalLabel, 
    RentalPeriod, 
    RentalPeriodContainer, 
    RentalTotal, 
    Separator, 
    Subtitle, 
    Title
} from './styles';

export interface CarProps{
    user_id: number,
    car: CarDTO,
    startDate: string,
    endDate: string,
    id: string
}
export function MyCars(){
    const [isLoading, setIsLoading] = useState(true);
    const [mycars, setMyCars] = useState<CarProps[]>([]);
    const theme = useTheme();
    useEffect(() => {
        async function loadMyCars(){
            try{
                const response = await api.get('/schedules_byuser?user_id=1');
                
                setMyCars(response.data);
            } catch (error) {
                console.log(error);
                Alert.alert('Erro ao carregar os seus carros agendados', 'Tente novamente mais tarde');
            } finally {
                setIsLoading(false);
            }
        }
        loadMyCars();
    }, []);
    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content" 
                    backgroundColor="transparent" 
                    translucent 
                />
                <BackButton
                    color={theme.colors.background_secondary}
                />
                <Title>
                       Seus agendamentos, {'\n'}
                       estão aqui.
                </Title>
                <Description>Conforto, segurança e praticidade.</Description>
            </Header>

            <InfoContainer>
                <Subtitle>Agendamentos feitos</Subtitle>
                <RentalTotal>{mycars.length}</RentalTotal>
            </InfoContainer>
            
            { isLoading ? 
                <Load />
            :
                <MyCarsList 
                    data={mycars}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                            <>
                                <CarCards
                                    data={item.car}
                                    onPress={() => {}}
                                    />
                                <RentalPeriodContainer>
                                    <RentalLabel>PERÍODO</RentalLabel>

                                    <RentalPeriod>
                                        <RentalDate>{item.startDate}</RentalDate>    
                                        <ArrowCard/>
                                        <RentalDate>{item.endDate}</RentalDate>
                                    </RentalPeriod>
                                
                                </RentalPeriodContainer>
                        </>
                    )}
                    ItemSeparatorComponent={() => <Separator/>}
                    />
            }
        </Container>
    );
}