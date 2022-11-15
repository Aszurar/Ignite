import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { HighlightText } from '@components/HighlightText';
import { Input } from '@components/Input';
import React from 'react';

import {
  Container, GroupIcon, InputContainer, SubHeader
} from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header hasBackButton />
      <SubHeader>
        <GroupIcon />
        <HighlightText
          title='Nome da turma'
          subtitle='adicione a galera e separe os times'
        />
      </SubHeader>
      <InputContainer>
        <Input
          placeholder='Nome da turma'
        />
      </InputContainer>
      <Button
        title='Criar'
      />
    </Container>
  );
}