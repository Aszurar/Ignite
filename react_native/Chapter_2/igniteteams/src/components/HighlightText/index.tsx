import React from 'react';

import {
  Container, SubTitle, SubtitleContainer, Title
} from './styles';

interface HighlightTextProps {
  title: string;
  subtitle: string;
}

export function HighlightText({ title, subtitle }: HighlightTextProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubtitleContainer>
        <SubTitle>{subtitle}</SubTitle>
      </SubtitleContainer>
    </Container>
  );
}