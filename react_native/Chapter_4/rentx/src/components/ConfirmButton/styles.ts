import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;
    background-color: ${({theme}) => theme.colors.shape_dark};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme}) => theme.fonts.primary_500};
    color: ${({theme}) => theme.colors.shape};
`;