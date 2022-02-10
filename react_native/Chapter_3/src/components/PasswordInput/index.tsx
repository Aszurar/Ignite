import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import {
    ChangePassowrdVisibilityButton,
    Container, 
    IconContainer, 
    InputText,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface PasswordInputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({
    iconName,
    ...rest
}: PasswordInputProps){
    const theme = useTheme();
    const [toggleEye, setToggleEye] = useState(false);

    function handleChangeEye() {
        setToggleEye(!toggleEye);
    }

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
                secureTextEntry={toggleEye}
                {...rest}
            />

            <ChangePassowrdVisibilityButton
                onPress={handleChangeEye}
            >
                <Feather
                    name={toggleEye ? 'eye-off' : 'eye' }
                    size={RFValue(24)}
                    color={theme.colors.text}
                />
            </ChangePassowrdVisibilityButton>

        </Container>
    );
}