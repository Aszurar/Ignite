import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../components/Input';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nome do evento</Text>
        <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Nome do participante" />
      </View>
      <View >
        <Text style={styles.subtitle}>Participantes</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Ninguém chegou no evento ainda?{"\n"}
            Adicione participantes a sua lista de presença.
          </Text>
        </View>
      </View>
    </View>
  );
}             