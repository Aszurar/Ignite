import React, { useState } from 'react';
import * as Yup from 'yup';
import { 
    Alert,
    Keyboard,
    KeyboardAvoidingView, 
    StatusBar, 
    TouchableWithoutFeedback, 
    View } 
from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { SubmitButton } from '../../components/SubmitButton';

import {
    Container, 
    Description, 
    Footer, 
    Form, 
    Header, 
    Title
} from './styles';

export function SignIn(){
    const theme = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({} as Yup.ValidationError);

    async function handleSignIn(){
        const schema = Yup.object().shape({
            email: Yup.string()
                      .email('Digite um email válido')
                      .required('E-mail e senha são obrigatórios'),
            
            password: Yup.string()
                         .required('E-mail e senha são obrigatórios')
        })
        
        try {
            await schema.validate({ email, password })
            Alert.alert('Sucesso ✅', 'Login realizado com sucesso')
            
        } catch (error) {
            if (error instanceof Yup.ValidationError ) {
                setErrorMessage(error)
                // Alert.alert('Opa 🚫', error.message)
            } else {
                Alert.alert('Erro na autenticação',
                            'Tente novamente')
            }
        }

    }
    return (
        <Container 
            behavior="position"
            style={{ flex: 1 }}
            enabled
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <StatusBar 
                        barStyle="dark-content" 
                        backgroundColor="transparent"
                        translucent
                    />
                    
                    
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
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoFocus
                            error={errorMessage.errors && errorMessage.message}
                            setErrorMessage={setErrorMessage}
                            iconName='mail'
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            placeholder="E-mail"
                            value={email}
                            />
                        <View
                            style={{height: RFValue(8)}}
                            />

                        <PasswordInput 
                            autoCapitalize='none'
                            autoCorrect={false}
                            autoFocus
                            iconName='lock'
                            onChangeText={setPassword}
                            placeholder="Senha"
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <SubmitButton 
                            text="Login"
                            onPress={handleSignIn}
                            enabled={true}
                            loading={false}
                            />
                        <View
                            style={{height: RFValue(8)}}
                            />
                        <SubmitButton 
                            text="Crie conta gratuita"
                            onPress={() => {}}
                            color={theme.colors.background_secondary}
                            enabled={false}
                            light={true}
                            loading={false}
                            />
                    </Footer>

                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}