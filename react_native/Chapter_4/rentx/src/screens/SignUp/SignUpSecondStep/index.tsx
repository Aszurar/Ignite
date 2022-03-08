import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { SubmitButton } from '../../../components/SubmitButton';
import { api } from '../../../services/api';
import theme from '../../../styles/theme';

import {
  Container,
  Description,
  Footer,
  Form,
  Header,
  InputDivisor,
  NavBarContainer,
  Steps,
  Subtitle,
  Title,
} from './styles';

interface data {
  user: {
    name: string;
    email: string;
    cnh: string;
  };
}

export function SignUpSecondStep() {
  const route = useRoute();
  const theme = useTheme();
  const { user } = route.params as data;
  const { navigate } = useNavigation<any>();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  async function handleSignUp() {
    if (!password || !passwordConfirm) {
      Alert.alert('Atenção❗', 'Preencha todos os campos');
    }

    if (password !== passwordConfirm) {
      Alert.alert('Erro ❌', 'As senhas não são iguais');
    }

    try {
      await api.post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.cnh,
        password,
      });

      navigate('Confirmation', {
        title: 'Conta Criada!',
        subtitle: `Agora é só você fazer login\n e aproveitar`,
        nextScreenRoute: 'SignIn',
      });
    } catch (error) {
      Alert.alert('Erro ❌ \nOcorreu um erro ao tentar realizar o cadastro');
      console.log(error);
    }
  }

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [Keyboard]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Container behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ flex: 1 }} enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Header>
              <NavBarContainer>
                <BackButton />
                <Steps>
                  <Bullet />
                  <Bullet active />
                </Steps>
              </NavBarContainer>
              {!isKeyboardVisible ? (
                <>
                  <Title>Crie sua{'\n'}conta</Title>
                  <Description>
                    Faça seu cadastro de{'\n'}
                    forma rápida e fácil.
                  </Description>
                </>
              ) : null}
            </Header>
            <Form>
              <Subtitle>2. Senha</Subtitle>

              <PasswordInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
                iconName="lock"
                onChangeText={setPassword}
                placeholder="Senha"
                value={password}
              />

              <InputDivisor />

              <PasswordInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
                iconName="lock"
                onChangeText={setPasswordConfirm}
                placeholder="Repetir senha"
                value={passwordConfirm}
              />
            </Form>

            <Footer>
              <SubmitButton
                color={theme.colors.sucess}
                text="Cadastrar"
                onPress={handleSignUp}
                enabled={true}
                loading={false}
              />
            </Footer>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    </ScrollView>
  );
}
