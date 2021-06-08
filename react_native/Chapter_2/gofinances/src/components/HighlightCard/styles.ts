import styled, { css } from 'styled-components/native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'up' | 'down' | 'total'; 
}
export const Container = styled.View<TypeProps>`
    background-color: ${ ({ type, theme }) => type === 'total' ? theme.colors.secundary : theme.colors.shape};

    border-radius: 5px;
    padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
    /* margin: -${RFValue(220)}px ${RFValue(12)}px 0; */
    width: ${RFValue(265)}px;
    
    margin: 0 ${RFValue(8)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;

    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const EvilIcon = styled(EvilIcons)<TypeProps>`
    font-size: ${RFValue(40)}px;
    
    ${({ type }) => type === 'up' && css`
        color: ${ ({ theme }) => theme.colors.success };
    `};
    
    ${ ({ type }) => type === 'down' && css`
        color: ${ ({ theme }) => theme.colors.attention};
    `}
`;

export const FeatherIcon = styled(Feather)`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(48)}px;
    
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
    
    margin-top: ${RFValue(38)}px;
`

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(18)}px;

    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;
