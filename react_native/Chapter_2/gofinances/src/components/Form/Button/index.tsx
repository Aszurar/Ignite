import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';


interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export function Button({text, ...rest}: ButtonProps) {
    return(
        <Container
            {...rest}
        >
            <Title>{ text }</Title>
        </Container>
    )
}