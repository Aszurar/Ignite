import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
    Container, 
    IconContainer, 
    InputText,
    TogglePasswordViewButton
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input({
    iconName,
    ...rest
}: InputProps){
    const theme = useTheme();
    
    return (
        <Container>

            <IconContainer>
                <Feather
                    name={iconName}
                    size={RFValue(24)}
                    color={theme.colors.text}
                />
            </IconContainer>

            <InputText 
                {...rest}
            />

            {/* {
                <TogglePasswordViewButton
                    onPress={() => {}}
                >
                    <IconContainer>
                        <Feather
                            name="eye"
                            size={RFValue(24)}
                            color="#000"
                            />
                    </IconContainer>
                </TogglePasswordViewButton>
            } */}
        </Container>
    );
}