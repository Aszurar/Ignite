import React from 'react';
import { Category, Container, Icon } from './styles';

interface CategorySelectButtonProps {
    text: string;
    onPress: () => void;
}

export function CategorySelectButton({ text, onPress } : CategorySelectButtonProps) {
    return(
        <Container onPress={onPress}>
            <Category>{text}</Category>
            <Icon name="chevron-down"/>
        </Container>
    ) 
}