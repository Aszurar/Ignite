import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    About,
    Accessories,
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
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Accessory } from '../../components/Accessory';

export interface Params {
    car: CarDTO;
}
export function CarDetails(){
    const navigation = useNavigation<any>();
    const { params } = useRoute();
    const { car } = params as Params;
    function handleScheduling(){
        navigation.navigate('Scheduling', { car });
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
                    imagesUrl={car.photos}
                />
            </SliderContainer>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {   car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)} 
                            />
                        ))
                    }
                </Accessories>

                <About>
                    {car.about}
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