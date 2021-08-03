import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    border-radius: 5px;
    background-color: ${({ theme}) => theme.colors.shape};
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    
    height: 100%;
    width: 100%;
    padding: 0 ${RFValue(61)}px 0 ${RFValue(16)}px;

    align-items: center;
    justify-content: space-between;

`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;