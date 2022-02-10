import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    height: ${RFValue(56)}px;
    width: 100%;

    flex-direction: row;
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

export const ChangePassowrdVisibilityButton = styled(BorderlessButton)`
    padding: 0 ${RFValue(16)}px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`;