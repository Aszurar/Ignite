import React, { useState } from 'react';
import { 
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

    return (
    <KeyboardAvoidingView 
        behavior="position"
        style={{ flex: 1 }}
        enabled
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Container>
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
                        onPress={() => {}}
                        enabled={false}
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

            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}