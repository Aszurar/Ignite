import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

interface TransactionTypeButtonProps extends TouchableOpacityProps {
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
            {...rest}>
            <Icon type={type} name={icon[type]} />            
            <Title>{text}</Title>
        </Container>
    )
}