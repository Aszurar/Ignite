import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme}) => theme.colors.primary};
    
    width: 100%;
    height: ${RFPercentage(42)}px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Head = styled.View`
   width: 100%;
   padding: 0 24px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`;

export const User = styled.View`
   margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 24px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    line-height: 24px;
`;
