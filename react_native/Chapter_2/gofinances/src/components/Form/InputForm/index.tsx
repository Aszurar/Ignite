import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error } from './styles';

interface InputFormProps extends TextInputProps {
    control: Control ;
    name: string;
    error: string;
}

export function InputForm({ name, control, error,...rest }: InputFormProps){
    return(
        <Container>
            <Controller
                control={control}
                render={({ field: {onChange, value}}) => (
                  <Input 
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                  />   
                )}
                 name={name}   
                />
            {error && <Error>{error}</Error>}
        </Container>
    )
}