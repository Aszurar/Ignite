import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
    disabled?: boolean;
    greenBackground: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    background-color: 
    ${({theme, greenBackground}) => greenBackground ? theme.colors.sucess : theme.colors.main};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_500};
    color: ${({theme}) => theme.colors.background_secondary};
`;