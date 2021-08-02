import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.colors.background};
`; 

export const Header = styled.View`
    background-color: ${( { theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;    
    justify-content: flex-end;
    
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    color: ${( { theme }) => theme.colors.shape};
`;

export const MonthSelect = styled.View`
    margin-top: ${RFValue(41)}px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.ScrollView``;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectButtonIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;

export const MonthText = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

