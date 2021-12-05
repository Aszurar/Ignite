import React from 'react';

import SucessBackgroundSVG from '../../assets/sucess_background.svg';
import DoneSvg from '../../assets/done.svg';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

import {
    Container, 
    Footer, 
    Subtitle, 
    SucessBackgroundContainer, 
    SucessTextContainer, 
    Title
} from './styles';

export function SchedulingComplete(){
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    function handleHome(){
        navigation.navigate('Home');
    }
    return (
        <Container>
            <StatusBar 
                barStyle={"light-content"}
                backgroundColor="transparent"
                translucent
            />
            <SucessBackgroundContainer>
                <SucessBackgroundSVG width={width}/>
            </SucessBackgroundContainer>

            <SucessTextContainer>
                <DoneSvg width={80} height={80}/>
                <Title>Carro alugado</Title>
                <Subtitle>Agora você só precisa ir {"\n"} até a concessionária da RENTX{"\n"} pegar o seu automável</Subtitle>
            </SucessTextContainer>
                <Footer>
                    <ConfirmButton
                        title="Ok"
                        onPress={handleHome}
                    />
                </Footer>
 
        </Container>
    );
}