import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import * as Yup from 'yup';
import {
    Container, 
    ErrorMessage, 
    IconContainer, 
    InputText,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    error: string;
    setErrorMessage: ({}: Yup.ValidationError) => void;
}

export function Input({
    error,
    iconName,
    setErrorMessage,
    value,
    ...rest
}: InputProps){
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocused(){
        setIsFocused(true);
        setErrorMessage({} as Yup.ValidationError);
    }
    
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!value);
    }
    return (
        <>
            <Container>

                <IconContainer
                    isFocus={isFocused}
                >
                    <Feather
                        name={iconName}
                        size={RFValue(24)}
                        color={ (isFocused || isFilled) ? theme.colors.main : theme.colors.text}
                    />
                </IconContainer>

                <InputText
                    isFocus={isFocused}
                    onFocus={handleInputFocused}
                    onBlur={handleInputBlur} 
                    {...rest}
                />
            </Container>
            
            {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        </>
    );
}