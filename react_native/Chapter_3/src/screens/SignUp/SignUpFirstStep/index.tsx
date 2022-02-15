import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButton } from '../../../components/BackButton';
import { Input } from '../../../components/Input';
import { SubmitButton } from '../../../components/SubmitButton';

import {
    Container, 
    Description, 
    Footer, 
    Form, 
    Header,
    InputDivisor,
    Subtitle,
    Title
} from './styles';

export function SignUpFirstStep(){

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

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
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Header>
                        <BackButton />
                        

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

                    
                    <Subtitle>1. Dados</Subtitle>

                    <Form>
                        <Input 
                            iconName='user'
                            placeholder='Nome'
                            setErrorMessage={() => {}}
                            error={''}
                        />
                        
                        <InputDivisor/>

                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            setErrorMessage={() => {}}
                            error={''}
                        />

                        <InputDivisor/>
                        
                        <Input
                            iconName='lock'
                            placeholder='CNH'
                            setErrorMessage={() => {}}
                            error={''}
                        />

                        <Footer>
                            <SubmitButton
                                text="Próximo"
                                onPress={() => {}}
                                enabled={false   }
                                loading={false}
                            />
                        </Footer>
                    </Form>
          

                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}