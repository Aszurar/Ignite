import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { 
    Keyboard, 
    Platform, 
    ScrollView, 
    TouchableWithoutFeedback, 
    View 
} from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import { SubmitButton } from '../../../components/SubmitButton';

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
    Title
} from './styles';

export function SignUpSecondStep(){

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const { navigate } = useNavigation<any>();


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
    }, [Keyboard])

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <Container
                behavior={Platform.OS === 'ios' ? 'position' : undefined}
                style={{ flex: 1}}
                enabled
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Header>
                            <NavBarContainer>
                                <BackButton />
                                <Steps>
                                    <Bullet />
                                    <Bullet active/>
                                </Steps>
                            </NavBarContainer>
                            {
                                !isKeyboardVisible ?
                                    <>
                                        <Title>Crie sua{'\n'}conta</Title>
                                        <Description>
                                                    Faça seu cadastro de{'\n'}
                                                    forma rápida e fácil.
                                        </Description>
                                    </>
                                    : null
                            }
                        
                        </Header>
                        <Form>
                            <Subtitle>2. Senha</Subtitle>
                            
                            <PasswordInput 
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoFocus
                                iconName='lock'
                                // onChangeText={setPassword}
                                placeholder="Senha"
                                // value={password}
                            />
                            
                            <InputDivisor/>

                            <PasswordInput 
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoFocus
                                iconName='lock'
                                // onChangeText={setPassword}
                                placeholder="Repetir senha"
                                // value={password}
                            />
                        </Form>
            
                        <Footer>
                            <SubmitButton
                                text="Próximo"
                                onPress={() => {}}
                                enabled={false}
                                loading={false}
                            />
                        </Footer>

                    </View>
                </TouchableWithoutFeedback>
            </Container>
        </ScrollView>
    );
}