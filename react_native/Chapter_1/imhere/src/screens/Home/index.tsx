import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidV4 } from "uuid";

import { Input } from '../../components/Input';
import { Participant } from '../../components/Participant';

import { styles } from './styles';


interface IParticipantsProps {
  id: string;
  name: string;
}

const participantsConfirmed = [
  { id: "e7a025b9-5cb7-45c2-814a-86b53206ff34", name: "Lucas" },
  { id: "9195bb7e-0c49-4196-9d08-1db2659bea50", name: "Mateus" },
  { id: "55e1ce99-f719-4bcc-9591-7005c0fc8d8f", name: "Luciano" },
  { id: "872c77ec-00e8-497b-982a-1817586f6f24", name: "Alberto" },
  { id: "450816e8-c322-4e7d-a62f-d6461f965c4d", name: "Rosangela" }
];

export function Home() {
  const [participantsList, setNewParticipantsList] = useState<IParticipantsProps[]>(participantsConfirmed);
  const [participants, setParticipants] = useState('');

  const handleNewParticipant = (value: string) => {
    setParticipants(value);
  }


  const handleAddNewParticipantToParticipantsList = () => {
    if (participants === '') {
      console.info("Entrou no if de verificação se foi nou não digital algo no Input antes de submeter.")
      Alert.alert('Campo vazio', ", Digite o nome do participante!");
      return;
    }

    const participantAlreadyExists = participantsList.find(participant => participant.name === participants);

    if (participantAlreadyExists) {
      Alert.alert('Participante já existe', "Digite outro nome, esse nome já está regustradi!");
      return;
    }

    const newParticipant = {
      id: uuidV4(),
      name: participants
    }

    setNewParticipantsList(prevState => [...prevState, newParticipant]);
    setParticipants('');
  }

  const handleRemoveParticipantFromParticipantsList = (name: string) => {

    Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setNewParticipantsList(participantsList.filter(participant => participant.name !== name))
      }
    ])
  }

  useEffect(() => {
  }, [participantsList])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nome do evento</Text>
        <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={participants}
          placeholder="Nome do participante"
          onChangeText={handleNewParticipant}
          handleAddNewParticipantToParticipantsList={handleAddNewParticipantToParticipantsList}
        />
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Participantes</Text>
        <FlatList
          data={participantsList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 12 }}
          renderItem={({ item }) => (
            <Participant
              key={item.id}
              name={item.name}
              handleRemoveParticipant={handleRemoveParticipantFromParticipantsList}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListEmptyComponent={() => (
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Ninguém chegou no evento ainda?{"\n"}
                Adicione participantes a sua lista de presença.
              </Text>
            </View>
          )}
        />
      </View>
    </View >
  );
}             