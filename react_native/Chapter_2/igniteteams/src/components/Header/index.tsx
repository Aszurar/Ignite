import React from 'react';
import LogoPng from "@assets/Logo.png";

import {
  BackButton,
  Container,
  LeftArrowIcon,
  Logo
} from './styles';

export interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton = true }: HeaderProps) {
  return (
    <Container hasBackButton={hasBackButton}>
      {
        hasBackButton && (
          <BackButton>
            <LeftArrowIcon />
          </BackButton>
        )
      }
      <Logo
        source={LogoPng}
      />
    </Container>
  );
}