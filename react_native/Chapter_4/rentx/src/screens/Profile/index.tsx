import React, { useRef, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Content,
  DataForm,
  DataFormSpace,
  Header,
  HeaderTop,
  LogoutButton,
  ProfilePhoto,
  ProfilePhotoContainer,
  Sessions,
  SessionsButton,
  SessionsButtonText,
  Title,
  UpdateProfilePhotoButton,
} from './styles';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TextInput, View } from 'react-native';
import { SubmitButton } from '../../components/SubmitButton';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';

export function Profile() {
  const { user, signOut, updatedUser } = useAuth();
  const theme = useTheme();

  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [driver_license, setDriverLicense] = useState(user.driver_license);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sessionButtonPressed, setSessionButtonPressed] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const driver_licenseRef = useRef<TextInput>(null);
  const newPasswordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  function handleSessionButtonPressed(active: 'dataEdit' | 'passwordEdit') {
    setSessionButtonPressed(active);
  }

  async function handleAvatarSelect() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      return;
    }
    if (result.uri) {
      setAvatar(result.uri);
    }
  }

  async function handleUpdateProfile(){
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        driver_license: Yup.string().required('CNH obrigatório'),
      });

      const data = { name, driver_license}
      await schema.validate(data);

      await updatedUser({
        id: user.id,
        user_id: user.user_id,
        name: name,
        email: user.email,
        avatar: avatar,
        driver_license: driver_license,
        token: user.token,
      })

      Alert.alert('Perfil atualizado com sucesso!');
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
          Alert.alert('Opa!', error.message);
        }else {
          Alert.alert('Opa!', 'Erro ao atualizar perfil, tente novamente.');
        }
          
    }
  }

  function handleSignOut() {
    Alert.alert('Sair', 'Deseja realmente sair? \nprecisará de internet para conectar-se novamente', [
      {
        text: 'Não',
      },
      {
        text: 'Sim',
        onPress: () => {
          try {
            signOut();
          } catch (err) {
            console.log(err);
          }
        },
      },
    ]);
    }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              {!!avatar && <ProfilePhoto source={{ uri: avatar }} />}
              <UpdateProfilePhotoButton onPress={handleAvatarSelect}>
                <Feather name="camera" size={RFValue(24)} color={theme.colors.background_secondary} />
              </UpdateProfilePhotoButton>
            </ProfilePhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Sessions>
              <SessionsButton
                onPress={() => handleSessionButtonPressed('dataEdit')}
                active={sessionButtonPressed === 'dataEdit'}
              >
                <SessionsButtonText active={sessionButtonPressed === 'dataEdit'}>Dados</SessionsButtonText>
              </SessionsButton>
              <SessionsButton
                onPress={() => handleSessionButtonPressed('passwordEdit')}
                active={sessionButtonPressed === 'passwordEdit'}
              >
                <SessionsButtonText active={sessionButtonPressed === 'passwordEdit'}>Trocar senha</SessionsButtonText>
              </SessionsButton>
            </Sessions>

            <DataForm>
              {sessionButtonPressed === 'dataEdit' ? (
                <>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="words"
                    defaultValue={user.name}
                    iconName="user"
                    placeholder="Nome"
                    onChangeText={setName}
                    onSubmitEditing={() => driver_licenseRef.current?.focus()}
                    returnKeyType="next"
                  />
                  <DataFormSpace />
                  <Input
                    editable={false}
                    defaultValue={user.email}
                    iconName="mail"
                  />
                  <DataFormSpace />
                  <Input
                    ref={driver_licenseRef}
                    autoCorrect={false}
                    autoCapitalize="none"
                    defaultValue={user.driver_license}
                    iconName="credit-card"
                    keyboardType="numeric"
                    placeholder="CNH"
                    onChangeText={setDriverLicense}
                    onSubmitEditing={() => {
                      handleSessionButtonPressed('passwordEdit');
                    }}
                    returnKeyType="next"
                  />
                </>
              ) : (
                <>
                  <PasswordInput
                    autoCapitalize="none"
                    iconName="lock"
                    placeholder="Senha atual"
                    onChangeText={setPassword}
                    onSubmitEditing={() => newPasswordRef.current?.focus()}
                    returnKeyType="next"
                  />
                  <DataFormSpace />
                  <PasswordInput
                    ref={newPasswordRef}
                    autoCapitalize="none"
                    iconName="lock"
                    placeholder="Nova Senha"
                    onChangeText={setNewPassword}
                    onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                    returnKeyType="next"
                  />
                  <DataFormSpace />
                  <PasswordInput
                    ref={confirmPasswordRef}
                    autoCapitalize="none"
                    iconName="lock"
                    placeholder="Repetir nova senha"
                    onChangeText={setConfirmPassword}
                    returnKeyType="next"
                  />
                </>
              )}
            </DataForm>
            <SubmitButton text="Salvar alterações" onPress={handleUpdateProfile}/>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
