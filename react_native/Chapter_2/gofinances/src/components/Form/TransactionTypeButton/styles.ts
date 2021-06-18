import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
    type: 'up' | 'down';
}

interface ContainerProps extends IconProps {
    isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    
    background-color: ${ ({ isActive, type, theme }) => isActive ? 
    ( type === 'up' ? theme.colors.success_light : theme.colors.attention_light) : theme.colors.background};
    /*${ ({ isActive, type, theme}) => isActive && type === 'up' && css`background-color: ${theme.colors.success_light}`}
    ${ ({ isActive, type, theme}) => isActive && type === 'down' && css`background-color: ${theme.colors.attention_light}`} */
    
    width: 48%;
    padding: ${RFValue(16)}px;  

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: ${({ isActive }) => isActive ? 0 : 1.5 }px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;

    /* opacity: 0.2; */
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(EvilIcons)<IconProps>`
    font-size: ${RFValue(24)}px;

    color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention};

    margin-right: ${RFValue(12)}px;
`;