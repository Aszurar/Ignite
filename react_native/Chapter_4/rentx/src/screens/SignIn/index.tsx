import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { Alert, Keyboard, StatusBar, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton';

import { Container, Description, Footer, Form, Header, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const theme = useTheme();
  const { navigate } = useNavigation<any>();
  const { signIn } = useAuth();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('rodrigo.goncalves@email.com');
  const [password, setPassword] = useState('123');

  const passowrdRef = useRef<TextInput>(null);

  function handleSignUp() {
    navigate('SignUpFirstStep');
  }

  async function handleSignIn() {
    setIsLoading(true);
    const schema = Yup.object().shape({
      password: Yup.string().required('Senha é obrigatória'),
      email: Yup.string().email('Digite um email válido').required('E-mail é obrigatório.'),
    });

    try {
      await schema.validate({ email, password });
      await signIn({ email, password });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa 🚫', error.message);
      } else {
        Alert.alert('Erro na autenticação', 'Tente novamente');
      }
    }
  }
  function keyboardDosentVisible() {
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
  }

  function incompleteFieldsAlert() {
    Alert.alert('Opa 🚫', 'Preencha todos os campos!');
    keyboardDosentVisible;
  }
  return (
    <Container behavior="position" enabled>
      <TouchableWithoutFeedback onPress={keyboardDosentVisible}>
        <View>
          <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background_primary} translucent />
          <Header>
            <Title>
              Estamos{'\n'}
              quase lá.
            </Title>

            <Description>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </Description>
          </Header>

          <Form>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              defaultValue={email}
              iconName="mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              onSubmitEditing={() => passowrdRef.current?.focus()}
              placeholder="E-mail"
              value={email}
              returnKeyType="next"
            />
            <View style={{ height: RFValue(8) }} />

            <PasswordInput
              ref={passowrdRef}
              autoCapitalize="none"
              autoCorrect={false}
              defaultValue={password}
              iconName="lock"
              onChangeText={setPassword}
              onSubmitEditing={!!email && !!password ? handleSignIn : incompleteFieldsAlert}
              placeholder="Senha"
              value={password}
              returnKeyType="send"
            />
          </Form>

          <Footer>
            <SubmitButton text="Login" onPress={handleSignIn} enabled={!!email && !!password} loading={isLoading} />
            <View style={{ height: RFValue(8) }} />
            <SubmitButton
              text="Crie conta gratuita"
              onPress={handleSignUp}
              color={theme.colors.background_secondary}
              enabled={!isLoading}
              light
              loading={false}
            />
          </Footer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
}
