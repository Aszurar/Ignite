import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.colors.background};
`; 

export const Header = styled.View`
    background-color: ${( { theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;    
    justify-content: flex-end;
    
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    color: ${( { theme }) => theme.colors.shape};
`;

export const TransactionTypesList = styled.ScrollView.attrs(
    {
        contentContainerStyle: {
            // flex: 1,
            padding: RFValue(24),
        }
    }
) ``;
