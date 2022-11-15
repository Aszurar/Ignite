import React from 'react';

import {
  Container, Message
} from './styles';

type ListEmptyProps = {
  message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}