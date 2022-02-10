import React from 'react';
import { KeyboardAvoidingView, StatusBar, View } from 'react-native';
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

    return (
    <KeyboardAvoidingView 
        behavior="position"
        enabled
    >

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
                    placeholder="E-mail"
                    />
                <View
                    style={{height: RFValue(8)}}
                    />

                <PasswordInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus
                    iconName='lock'
                    placeholder="Senha"
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
    </KeyboardAvoidingView>
    );
}