import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import theme from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';


interface IInputProps extends TextInputProps {
}
export function Input({ ...rest }: IInputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholderTextColor={theme.COLORS.TEXT_SECONDARY}
        {...rest} />
      <Button />
    </View>
  );
}