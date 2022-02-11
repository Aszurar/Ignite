import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
    isFocus: boolean;
}

export const Container = styled.View<ContainerProps>`
    height: ${RFValue(56)}px;
    width: 100%;

    flex-direction: row;

    ${({isFocus, theme}) => isFocus && css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${theme.colors.main};
    `}
`;

export const IconContainer = styled.View`
    padding: ${RFValue(16)}px;
    margin-right: ${RFValue(2)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 0 ${RFValue(23)}px;

    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(18.15)}px;

    color: ${({ theme }) => theme.colors.title};
`;