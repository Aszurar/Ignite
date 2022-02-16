import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


interface Props {
    isFocus: boolean;
}

export const Container = styled.View`
    height: ${RFValue(56)}px;
    width: 100%;

    flex-direction: row;
`;
 
export const IconContainer = styled.View<Props>`
    padding: ${RFValue(16)}px;
    margin-right: ${RFValue(2)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: transparent;
    
    ${({isFocus, theme}) => isFocus && css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)<Props>`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 0 ${RFValue(23)}px;

    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(18.15)}px;

    color: ${({ theme }) => theme.colors.title};
    
    
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: transparent;
    
    ${({isFocus, theme}) => isFocus && css`
        border-bottom-width: ${RFValue(2)}px;
        border-bottom-color: ${theme.colors.main};
    `}
`;

export const ChangePassowrdVisibilityButton = styled(RectButton)`
    padding: 0 ${RFValue(16)}px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

