import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
    BackIcon,
    Container
} from './styles';

interface BackButtonProps extends BorderlessButtonProps{
    color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps){
    const theme = useTheme();
    const navigation = useNavigation();

    function handleBackPage(){
        navigation.goBack();
    }
    return (
        <Container
            onPress={handleBackPage}
            {...rest}
        >
            <BackIcon 
                color={color ? color : theme.colors.text}
            />
        </Container>
    );
}