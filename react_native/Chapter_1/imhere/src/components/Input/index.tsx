import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import theme from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';


interface IInputProps extends TextInputProps {
  handleAddNewParticipantToParticipantsList: () => void;
}
export function Input({ handleAddNewParticipantToParticipantsList, ...rest }: IInputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        keyboardType="email-address"
        returnKeyType="send"
        placeholderTextColor={theme.COLORS.TEXT_SECONDARY}
        onSubmitEditing={handleAddNewParticipantToParticipantsList}
        {...rest} />
      <Button
        onPress={handleAddNewParticipantToParticipantsList}
      />
    </View>
  );
}