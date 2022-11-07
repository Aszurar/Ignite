import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, GroupIcon, GroupImage, Subtitle, TextContainer, Title
} from './styles';

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
  subtitle: string;
  image: string;
}

export function GroupCard({ title, image, subtitle, ...rest }: GroupCardProps) {
  const quantity = subtitle === "0" ? "" : `${subtitle} pessoas`;

  return (
    <Container {...rest}>
      {
        !!image ? (
          <GroupImage source={{ uri: image }} />
        ) : (
          <GroupIcon />
        )
      }
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{quantity}</Subtitle>
      </TextContainer>
    </Container>
  );
}