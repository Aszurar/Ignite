import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { DataTransactionCardProps } from '.';
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme}) => theme.colors.primary};
    
    width: 100%;
    height: ${RFPercentage(42)}px;

    justify-content: center;
    align-items:flex-start;
    flex-direction: row;
`;

export const Head = styled.View`
   width: 100%;
   padding: 0 24px;
   flex-direction: row;

   justify-content: space-between;
   align-items: center;

   margin-top: ${getStatusBarHeight() + RFValue(28)}px;
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
export const LogoutIconButton = styled(BorderlessButton)``;

export const PowerIcon = styled(Feather)`

    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secundary};
`; 

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 16}
})`
    position: absolute;

    margin-top: ${RFPercentage(20)}px;
`;


export const Transaction = styled.View`
    flex: 1;

    margin-top: ${RFValue(84)}px;
    padding: 0 ${RFValue(24)}px;

`;

export const TitleTransaction = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const ListTransaction = styled(
        FlatList as new () => FlatList<DataTransactionCardProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{ paddingBottom: getBottomSpace() }                    

})``;
