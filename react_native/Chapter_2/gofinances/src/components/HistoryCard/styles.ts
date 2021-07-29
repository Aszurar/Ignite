import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
    color: string;
}
export const Container = styled.View<ContainerProps>`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    
    padding: ${RFValue(13)}px  ${RFValue(16)}px ${RFValue(13)}px ${RFValue(20)}px;

    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    border-left-width : 5px;
    border-left-color: ${({color}) => color};
    
    margin-bottom: ${RFValue(10)}px;
;

`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;

`;