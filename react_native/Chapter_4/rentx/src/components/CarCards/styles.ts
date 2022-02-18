import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Gasoline from '../../assets/energy.svg';

export const Container = styled(RectButton)`
    width: 100%;
    height: ${RFValue(126)}px;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Content = styled.View`
    width: 100%;
    height: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(24)}px;
`;


export const CarImg = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: ${RFValue(92)}px;
    height: ${RFValue(160)}px;
`;

export const Info = styled.View`
    justify-content: space-between;
`;

export const InfoContainer = styled.View`
    text-align: left;
`;

export const Title = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.secondary_500};
    text-transform: uppercase;
    letter-spacing: ${Dimensions.get('window').width * 0.004}px;

    color: ${({theme}) => theme.colors.text_detail};
`;


export const About = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: ${RFValue(16)}px;
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.title};
    text-transform: uppercase;
    margin-bottom: ${RFValue(4)}px;
`;

export const Price = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.main};

    margin-bottom: ${RFValue(4)}px;
`;

export const Type = styled.View`
    margin-left: ${RFValue(24)}px;
`;

export const FuelIcon = styled(Gasoline).attrs({
    width: RFValue(16.67),
    height: RFValue(21.67),
})``;