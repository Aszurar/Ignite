import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};

    padding: 0 ${RFValue(24)}px; 
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() +  RFValue(19)}px;

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;

    line-height: ${RFValue(43.52)}px;

    margin-top: ${RFValue(48)}px;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;

    margin-top: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
    margin-top: ${RFValue(67)}px;
    font-family: ${({theme}) => theme.fonts.secondary_600};
    color: ${({theme}) => theme.colors.title};
    
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(21.76)}px;
`;

export const Form = styled.View`
    margin-top: ${RFValue(21)}px;
`;

export const InputDivisor = styled.View`
    height: ${RFValue(8)}px;
`;

export const Footer = styled.View`
    margin-top: ${RFValue(16)}px;
`;