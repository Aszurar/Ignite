import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    `;

export const Header = styled.View`
    width: 100%;
    height: 70%;
    background-color: ${({theme}) => theme.colors.primary};

    justify-content: flex-end;
    align-items: center;
`;

export const HeaderWrapper = styled.View`
    align-items: center;
    `;

export const Title = styled.Text`
    text-align: center;
    
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(30)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    
    margin-top: ${RFValue(45)}px;
    `;

export const Subtitle = styled.Text`
    text-align: center;
    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.shape};
    
    margin-top: ${RFValue(80)}px;
    margin-bottom: ${RFValue(67)}px;
    `;

export const LoginContainer = styled.View`
    height: ${RFValue(128)}px;
    width: 100%;
    padding: 0 ${RFValue(32)}px;

    margin-top: -${RFValue(26)}px;
    justify-content: space-between;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background-color: ${({theme}) => theme.colors.secundary};
`;