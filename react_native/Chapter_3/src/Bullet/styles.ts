import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const ImageIndexer = styled.View`
    flex-direction: row;
    align-self: flex-end;

    margin-right: ${RFValue(24)}px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: ${RFValue(6)}px;
    height: ${RFValue(6)}px;
    border-radius: ${RFValue(3)}px;
    background-color: ${({active, theme}) => 
    active ? theme.colors.title : theme.colors.shape};

    margin-left: ${RFValue(8)}px;
`;