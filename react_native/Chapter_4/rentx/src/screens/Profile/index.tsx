import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  DataForm,
  Header,
  HeaderTop,
  LogoutButton,
  ProfilePhoto,
  ProfilePhotoContainer,
  Sessions,
  SessionsButton,
  SessionsButtonBorder,
  SessionsButtonText,
  Title,
  UpdateProfilePhotoButton,
} from './styles';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar, View } from 'react-native';
import { SubmitButton } from '../../components/SubmitButton';
import { Input } from '../../components/Input';

export function Profile() {
  const theme = useTheme();

  function handleSignOut() {}
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.background_secondary} />
          <Title>Editar Perfil</Title>
          <LogoutButton onPress={handleSignOut}>
            <Feather name="power" size={RFValue(24)} color={theme.colors.background_secondary} />
          </LogoutButton>
        </HeaderTop>

        <ProfilePhotoContainer>
          <ProfilePhoto source={{ uri: 'https://avatars.githubusercontent.com/u/64987824?v=4' }} />
          <UpdateProfilePhotoButton onPress={() => {}}>
            <Feather name="camera" size={RFValue(24)} color={theme.colors.background_secondary} />
          </UpdateProfilePhotoButton>
        </ProfilePhotoContainer>
      </Header>

      <Sessions>
        <SessionsButton>
          <SessionsButtonText>Dados</SessionsButtonText>
          <SessionsButtonBorder />
        </SessionsButton>
        <View style={{ width: RFValue(20) }} />
        <SessionsButton>
          <SessionsButtonText>Trocar senha</SessionsButtonText>
          <SessionsButtonBorder />
        </SessionsButton>
      </Sessions>

      <DataForm>
        <Input iconName="user" />
        <Input iconName="mail" />
        <Input iconName="credit-card" />
      </DataForm>
      <SubmitButton text="Salvar alterações" />
    </Container>
  );
}
