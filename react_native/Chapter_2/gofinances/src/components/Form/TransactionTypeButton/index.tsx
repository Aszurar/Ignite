import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, Container, Icon, Title } from './styles';

interface TransactionTypeButtonProps extends RectButtonProps {
    type: 'up' | 'down';
    text: string;
    isActive: boolean;
}

const icon = {
    up: 'arrow-up',
    down: 'arrow-down'
}

export function TransactionTypeButton({type, text, isActive, ...rest}: TransactionTypeButtonProps){
    return(
        <Container
            type={type}
            isActive={isActive}
            >

            <Button
            {...rest}
            >
                <Icon type={type} name={icon[type]} />            
                <Title>{text}</Title>
            </Button>
        </Container>
    )
}