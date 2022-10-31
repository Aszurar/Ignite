import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';

type IParticipantProps = {
  name: string;
  handleRemoveParticipant: (name: string) => void;
}

export function Participant({ name, handleRemoveParticipant }: IParticipantProps) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Button deleteIcon onPress={() => handleRemoveParticipant(name)} />
    </View >
  );
}