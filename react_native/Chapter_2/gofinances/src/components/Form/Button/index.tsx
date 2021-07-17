import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';


interface ButtonProps extends RectButtonProps {
    text: string;
    color?: string;
    onPress: () => void;
}

export function Button({text, color, onPress, ...rest}: ButtonProps) {
    return(
        <Container
            onPress={onPress}
            {...rest}
        >
            <Title>{ text }</Title>
        </Container>
    )
}