import React from 'react';

import {
    Container, 
    Footer, 
    Subtitle, 
    SucessBackgroundContainer, 
    SucessTextContainer, 
    Title
} from './styles';

import SucessBackgroundSVG from '../../assets/sucess_background.svg';
import DoneSvg from '../../assets/done.svg';
import { useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete(){
    const {width} = useWindowDimensions();

    return (
        <Container>
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
                    />
                </Footer>
 
        </Container>
    );
}