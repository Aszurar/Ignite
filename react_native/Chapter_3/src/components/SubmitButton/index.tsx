import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
    Container, Title
} from './styles';

interface SubmitButtonProps extends RectButtonProps{
    color?: string;
    enabled?: boolean;
    light?: boolean;
    loading?: boolean;
    text: string;
}
export function SubmitButton({
    color, 
    text, 
    enabled = true,
    light = false, 
    loading = false, 
    ...rest 
}: SubmitButtonProps){
    const theme = useTheme();
    return (
        <Container
            {...rest}
            color={color ? color : theme.colors.main}
            enabled={enabled}
            style={{opacity: (enabled === false || loading === true) ? 0.5 :1}}         
        >
            {
                loading ?
                    <ActivityIndicator color={theme.colors.shape} size={24} />
                :
                    <Title light={light}>{text}</Title>
            }
        </Container>
    );
}