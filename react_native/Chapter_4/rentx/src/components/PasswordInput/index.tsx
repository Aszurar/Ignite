import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { ChangePassowrdVisibilityButton, Container, IconContainer, InputText } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, value, ...rest }: PasswordInputProps) {
  const theme = useTheme();
  const [toggleEye, setToggleEye] = useState(true);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocused() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleChangeEye() {
    setToggleEye(!toggleEye);
  }

  return (
    <Container>
      <IconContainer isFocus={isFocused}>
        <Feather
          name={iconName}
          size={RFValue(24)}
          color={isFocused || isFilled ? theme.colors.main : theme.colors.text}
        />
      </IconContainer>

      <InputText
        secureTextEntry={toggleEye}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        isFocus={isFocused}
        {...rest}
      />

      <ChangePassowrdVisibilityButton onPress={handleChangeEye}>
        <Feather name={toggleEye ? 'eye-off' : 'eye'} size={RFValue(24)} color={theme.colors.text} />
      </ChangePassowrdVisibilityButton>
    </Container>
  );
}
