import React from 'react';
import { StatusBar } from 'react-native';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
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
    Container, 
    Content,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    SliderContainer,
} from './styles';
import { SubmitButton } from '../../components/SubmitButton';

export function CarDetails(){
    const navigation = useNavigation<any>();

    function handleScheduling(){
        navigation.navigate('Scheduling');
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
                    <Acessory icon={SpeedIcon} name="380km/h" />
                    <Acessory icon={AccelerationIcon} name="3.2s" />
                    <Acessory icon={ForceIcon} name="800 HP" />
                    <Acessory icon={GasolineIcon} name="Gasoline" />
                    <Acessory icon={ExchangeIcon} name="Auto" />
                    <Acessory icon={PeopleIcon} name="2 pessoas" />
                </Acessories>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro 
                    de lide indultado na praça Real Maestranza de Sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>

            </Content>

            <Footer>
                <SubmitButton 
                    greenBackground={false}
                    disabled={false}
                    text="Escolher período do aluguel"
                    onPress={handleScheduling}
                />
            </Footer>

        </Container>
    );
}