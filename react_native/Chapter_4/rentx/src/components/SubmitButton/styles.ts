import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
    color: string;
}

interface TitleProps {
    light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({color}) => color};
1`;

export const Title = styled.Text<TitleProps>`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.primary_500};
    color: ${({theme, light}) => light ? theme.colors.title : theme.colors.background_secondary};
`;