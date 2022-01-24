import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
    Container, Title
} from './styles';

interface SubmitButtonProps extends RectButtonProps{
    greenBackground: boolean;
    text: string;
    enabled?: boolean;
    loading?: boolean;
}
export function SubmitButton({
    greenBackground, 
    text, 
    enabled = true, 
    loading = false, 
    ...rest 
}: SubmitButtonProps){
    const theme = useTheme();
    return (
        <Container
            {...rest}
            greenBackground={greenBackground}
            enabled={enabled}
            style={{opacity: (enabled === false || loading === true) ? 0.5 :1}}         
        >
            {
                loading ?
                    <ActivityIndicator color={theme.colors.shape} size={24} />
                :
                    <Title>{text}</Title>
            }
        </Container>
    );
}