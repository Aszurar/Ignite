import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    active: boolean;
}

export const Container = styled.View<Props>`
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({active, theme}) => 
    active ? theme.colors.title : theme.colors.text_detail};

    margin-left: ${RFValue(8)}px;
`;