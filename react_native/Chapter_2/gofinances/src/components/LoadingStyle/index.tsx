import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './style';

export function LoadingStyle() {
    const theme = useTheme();
    
    return (
        <Container>
            <ActivityIndicator size="large" color={theme.colors.primary} />
        </Container>
    ) 
}