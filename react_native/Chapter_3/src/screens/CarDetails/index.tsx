import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container, 
    Header,
    SliderContainer
} from './styles';

export function CarDetails(){
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
        </Container>
    );
}