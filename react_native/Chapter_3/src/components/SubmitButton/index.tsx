import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container, Title
} from './styles';

interface SubmitButtonProps extends RectButtonProps{
    disabled: boolean;
    greenBackground: boolean;
    text: string;
}
export function SubmitButton({ disabled, greenBackground, text, ...rest }: SubmitButtonProps){
    return (
        <Container
            {...rest}
            greenBackground={greenBackground}            
        >
            <Title>{text}</Title>
        </Container>
    );
}