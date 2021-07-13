import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
interface ButtonProps {
    cor?: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    background-color: ${({ theme }) => theme.colors.secundary};
    align-items: center;
    width: 100%;
    
    border-radius: 5px;
    padding: ${RFValue(18)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
`;
 