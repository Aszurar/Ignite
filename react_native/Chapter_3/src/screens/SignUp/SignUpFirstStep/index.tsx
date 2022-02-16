import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
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

export function SignUpFirstStep(){

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const { navigate } = useNavigation<any>();

    function handleSecondStep() {
        navigate('SignUpSecondStep')
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
                                    <Bullet active/>
                                    <Bullet />
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
                            <Subtitle>1. Dados</Subtitle>
                            
                            <Input 
                                iconName='user'
                                autoCapitalize='words'
                                autoCorrect
                                error={''}
                                placeholder='Nome'
                                returnKeyType='next'
                                setErrorMessage={() => {}}
                                />
                            
                            <InputDivisor/>

                            <Input
                                iconName='mail'
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                                placeholder='E-mail'
                                returnKeyType='next'
                                setErrorMessage={() => {}}
                                error={''}
                            />

                            <InputDivisor/>
                            
                            <Input
                                iconName='credit-card'
                                keyboardType='numeric'
                                placeholder='CNH'
                                setErrorMessage={() => {}}
                                error={''}
                            />
                        </Form>
            
                        <Footer>
                            <SubmitButton
                                text="Próximo"
                                onPress={handleSecondStep}
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