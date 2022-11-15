import React, { useState } from 'react';
import { Header } from '@components/Header';
import { Container, GroupList, Separator, SubHeader } from './styles';
import { HighlightText } from '@components/HighlightText';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export type GroupProps = {
  id: string,
  name: string,
  image: string,
  amount: string,
  description: string,
}

const DATA = {
  id: "1",
  name: "Grupo de estudos",
  image: "https://avatars.githubusercontent.com/u/60210220?v=4",
  amount: "10",
  description: "Grupo de estudos de React Native",
}

const DATA2 = {
  id: "2",
  name: "Grupo de  jogos",
  image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/b21f9f98829dea9a48fd8aaddc1f159d.png",
  amount: "32",
  description: "Grupo de jogos de RPG",
}

export function Groups() {
  const [groups, setGroups] = useState<GroupProps[]>([DATA, DATA2, DATA, DATA2, DATA, DATA2])

  return (
    <Container >
      <Header />
      <SubHeader>
        <HighlightText title="Turmas" subtitle="jogue com a sua turma" />
      </SubHeader>
      <GroupList
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GroupCard
            title={item.name}
            subtitle={item.amount}
            image={item.image}
            onPress={() => console.log("Yes")}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (<ListEmpty message="Que tal cadastrar a primeira turma?" />)}
      />
      <Button
        title="Criar nova turma"
      />
    </Container>
  );
}