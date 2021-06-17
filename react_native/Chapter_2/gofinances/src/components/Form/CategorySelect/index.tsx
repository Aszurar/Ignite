import React from 'react';
import { Category, Container, Icon } from './styles';

interface CategorySelectProps {
    text: string;
}

export function CategorySelect({ text } : CategorySelectProps) {
    return(
        <Container>
            <Category>{text}</Category>
            <Icon name="chevron-down"/>
        </Container>
    ) 
}