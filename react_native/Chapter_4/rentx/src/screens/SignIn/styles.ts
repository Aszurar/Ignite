import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
    padding: 0 ${RFValue(24)}px;
    background-color: ${({theme}) => theme.colors.background_primary};
`;

interface HeaderProps {
    isKeyboardVisible: boolean;
}

export const Header = styled.View<HeaderProps>`
    width: 100%;
    margin-top: ${({isKeyboardVisible}) => isKeyboardVisible ? 
                    RFValue(20) + getStatusBarHeight() : RFValue(115) + getStatusBarHeight()}px;
    padding-left: ${RFValue(8)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;
    line-height: ${RFValue(43.52)}px;

    color: ${({theme}) => theme.colors.title_light};
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;

    color: ${({theme}) => theme.colors.text};

    margin-top: ${RFValue(6)}px;
`;

export const Form = styled.View`
    width: 100%;
    margin: ${RFValue(56)}px 0;
`;

export const Footer = styled.View`
    width: 100%;
`;
