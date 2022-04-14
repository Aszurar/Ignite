import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Container, IconContainer, InputText } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

interface InputRef {
  focus(): void;
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = ({ iconName, value, ...rest }, ref) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputElementRef = useRef<TextInput>(null);

  function handleInputFocused() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <>
      <Container>
        <IconContainer isFocus={isFocused}>
          <Feather
            name={iconName}
            size={RFValue(24)}
            color={isFocused || isFilled ? theme.colors.main : theme.colors.text}
          />
        </IconContainer>

        <InputText
          ref={inputElementRef}
          isFocus={isFocused}
          onFocus={handleInputFocused}
          onBlur={handleInputBlur}
          {...rest}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
