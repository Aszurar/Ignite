import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Feather } from '@expo/vector-icons';
import { SubmitButton } from '../../components/SubmitButton';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import SpeedIcon from '../../assets/speed.svg';
import AccelerationIcon from '../../assets/acceleration.svg';
import ForceIcon from '../../assets/force.svg';
import GasolineIcon from '../../assets/gasoline.svg';
import ExchangeIcon from '../../assets/exchange.svg';
import PeopleIcon from '../../assets/people.svg';

import {
    About,
    Acessories,
    Brand,
    CalendarIcon,
    Container, 
    Content,
    DateInfo,
    DateTitle,
    DateValue,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    RentalPeriod,
    RentalPrice,
    RentalPriceDetails,
    RentalPriceLabel,
    RentalPriceQuota,
    RentalPriceTotal,
    SliderContainer,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Accessory } from '../../components/Accessory';

export function SchedulingDetails(){
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleSchedulingComplete(){
        navigation.navigate('SchedulingComplete');
    }
    return (
        <Container>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <BackButton />
            </Header>


            <SliderContainer>
                <ImageSlider 
                    imagesUrl={["https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png"]}
                />
            </SliderContainer>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    
                    <Rent>
                        <Period>AO DIA</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Accessory icon={SpeedIcon} name="380km/h" />
                    <Accessory icon={AccelerationIcon} name="3.2s" />
                    <Accessory icon={ForceIcon} name="800 HP" />
                    <Accessory icon={GasolineIcon} name="Gasoline" />
                    <Accessory icon={ExchangeIcon} name="Auto" />
                    <Accessory icon={PeopleIcon} name="2 pessoas" />
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name="calendar" 
                            size={RFValue(24)} 
                            color={theme.colors.background_secondary} 
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>10/10/2020</DateValue>
                    </DateInfo>
                    
                    <Feather 
                        name="chevron-right" 
                        size={RFValue(10)} 
                        color={theme.colors.text_detail} 
                    />
                    
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>20/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>


            <Footer>
                <SubmitButton 
                    greenBackground
                    disabled={false}
                    text="Alugar agora"
                    onPress={handleSchedulingComplete}
                />
            </Footer>

        </Container>
    );
}