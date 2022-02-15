import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { 
    Alert,
    Keyboard,
    Platform, 
    ScrollView, 
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
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';

export function SignIn(){
    const theme = useTheme();
    const navigation = useNavigation<any>();
    
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({} as Yup.ValidationError);

    function handleSignUp(){
        navigation.navigate('SignUpFirstStep');
    }

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

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardVisible(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
          };

    }, [Keyboard])
    return ( 
        <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator
        >
            <Container 
                behavior='position'
                style={{ flex: 1 }}
                enabled
                keyboardVerticalOffset={Platform.select({ios: 0, android: RFValue(-50)})}
            >
                <StatusBar 
                    barStyle="dark-content" 
                    backgroundColor={theme.colors.background_primary}
                    translucent
                />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                        <Header>

                            { 
                            (!isKeyboardVisible) ?
                                <Title>
                                    Estamos{'\n'}
                                    quase lá.
                                </Title>
                                :
                                <BackButton
                                    style={{ marginBottom: RFValue(58) }}
                                    onPress={Keyboard.dismiss}
                                />
                            }
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
                                onPress={handleSignUp}
                                color={theme.colors.background_secondary}
                                enabled={true}
                                light={true}
                                loading={false}
                                />
                        </Footer>

                    </View>
                </TouchableWithoutFeedback>
            </Container>
        </ScrollView>
    );
}