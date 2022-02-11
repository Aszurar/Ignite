import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import {
    Container, 
    IconContainer, 
    InputText,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value: string;
}

export function Input({
    iconName,
    value,
    ...rest
}: InputProps){
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocused(){
        setIsFocused(true);
    }
    
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!value);
    }
    return (
        <Container
            isFocus={isFocused}
        >

            <IconContainer>
                <Feather
                    name={iconName}
                    size={RFValue(24)}
                    color={ (isFocused || isFilled) ? theme.colors.main : theme.colors.text}
                />
            </IconContainer>

            <InputText
                onFocus={handleInputFocused}
                onBlur={handleInputBlur} 
                {...rest}
            />
        </Container>
    );
}