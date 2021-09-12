import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
    BackIcon,
    Container
} from './styles';

interface BackButtonProps extends BorderlessButtonProps{
    color?: string;
}

export function BackButton({ color }: BackButtonProps){
    const theme = useTheme();
    return (
        <Container>
            <BackIcon 
                color={color ? color : theme.colors.text}
            />
        </Container>
    );
}