import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme  }) => theme.colors.background};
`;

export const Header = styled.View`
    height: ${RFValue(113)}px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;

    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.shape};
`;

interface CategoryProps {
    isActive: boolean;
}

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;
    
    flex-direction: row;
    align-items: center;

    ${({isActive, theme}) => isActive && css`background-color:${theme.colors.secundary_light}`}

`;

export const Icon = styled(Feather)<CategoryProps>`
    margin-right: ${RFValue(16)}px;
    font-size: ${RFValue(20)}px;
    color: ${({isActive, theme}) => isActive ? theme.colors.primary : theme.colors.text_dark}

`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme  }) => theme.colors.text_dark}
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(24)}px;
    
    align-items: center;
`;

