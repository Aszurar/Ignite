import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.attention};
    margin: 0 ${RFValue(7)}px;
    margin-bottom: ${RFValue(7)}px;
    font-size: ${RFValue(12)}px;
`;