import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Button,
    Title
} from './styles';

interface ConfirmButtonProps extends RectButtonProps{
    title: string;
}

export function ConfirmButton({ title, ...rest }: ConfirmButtonProps){
    return (
        <Button
            {...rest}
        >
            <Title>{title}</Title>            
        </Button>
    );
}