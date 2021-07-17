import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton).attrs({ 
    activeOpacity: 0.7,
})`
    background-color: ${({ theme }) => theme.colors.shape};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(18)}px ${RFValue(16)}px;

    border-radius: ${RFValue(5)}px;
`;

export const Category = styled.TextInput`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;