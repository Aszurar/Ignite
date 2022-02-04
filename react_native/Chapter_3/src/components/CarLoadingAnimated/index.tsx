import React from 'react';
import LottieView from 'lottie-react-native';
import loadingCar from '../../assets/car_loading_animation.json';
import {
    Container
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function CarLoadingAnimated(){
    return (
        <Container>
            <LottieView
                source={loadingCar}
                style={{ height: RFValue(200) }}
                resizeMode="contain"
                autoPlay
                loop
            />

        </Container>
    );
}