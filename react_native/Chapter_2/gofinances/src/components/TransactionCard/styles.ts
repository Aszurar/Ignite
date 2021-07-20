import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${( { theme } ) => theme.colors.shape };
    padding: ${RFValue(18)}px  ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;

    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${( { theme } ) => theme.colors.title}
`;

interface AmountProps {
    type: 'up' | 'down';
}

export const Amount = styled.Text<AmountProps>`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    margin-top: ${RFValue(2)}px;

    color: ${( { type, theme } ) => type === 'up' ? theme.colors.success : theme.colors.attention}
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${( { theme}) => theme.colors.text};
    
    margin-left: ${RFValue(17)}px;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;

