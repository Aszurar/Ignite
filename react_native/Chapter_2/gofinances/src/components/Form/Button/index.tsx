import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';


interface ButtonProps extends TouchableOpacityProps {
    text: string;
    color?: string;
}

export function Button({text, color, ...rest}: ButtonProps) {
    return(
        <Container
            cor={color}
            {...rest}
        >
            <Title>{ text }</Title>
        </Container>
    )
}