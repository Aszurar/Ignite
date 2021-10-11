import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 109px;
    height: 92px;
    background-color: ${({theme}) => theme.colors.background_secondary};
    align-items: center;
    justify-content: center;

    padding: 16px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    margin-top: 14px;
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;
    color: ${({theme}) => theme.colors.text};
`;