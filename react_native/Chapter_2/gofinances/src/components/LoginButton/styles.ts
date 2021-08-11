import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';


export const Button = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.shape};
    height: ${RFValue(56)}px;
    border-radius: 5px;

    flex-direction: row;
    align-items: center;    
    margin-bottom: ${RFValue(16)}px;
`;
export const ImageContainer = styled.View`
    height: 100%;
    padding: ${RFValue(16)}px;
    border-color: ${({theme})=>theme.colors.background};
    border-right-width: 1px;
`;

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
`;