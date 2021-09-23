import React, { useState } from 'react';
import { 
    ActivityIndicator, 
    Alert, 
    Platform 
} from 'react-native';
import { 
    Container, 
    Footer, 
    Header, 
    HeaderWrapper,
    LoginContainer,
    Subtitle,
    Title
} from './styles';
import GoogleIcon from '../../assets/google-icon.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import LogoIcon from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { LoginButton } from '../../components/LoginButton';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';

export function SignIn() {
    const { signInWithGoogle, signInWithApple } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme();

    async function handleSignInWithGoogle(){
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
            setIsLoading(false);
        }
    }

    async function handleSignInWithApple(){
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Apple');
            setIsLoading(false);
        }
    }
    return(
        <>
        <Container>
            <Header>
                <HeaderWrapper>
                    <LogoIcon 
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />

                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>

                </HeaderWrapper>

                <Subtitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </Subtitle>
            </Header>
    
            <Footer>
                 <LoginContainer>
                    <LoginButton 
                        svg={GoogleIcon}
                        title="Entrar com Google"
                        onPress={handleSignInWithGoogle}
                    />
                    { Platform.OS === 'ios' && 
                        <LoginButton 
                            svg={AppleIcon}
                            title="Entrar com Apple"
                            onPress={handleSignInWithApple}
                        />
                    }   
                </LoginContainer>

                {
                    isLoading && 
                    (<ActivityIndicator 
                        size="large" 
                        color={theme.colors.shape} 
                        style={{marginTop: RFValue(18)}}
                    />)
                }
            </Footer>
        </Container>    
    </>
    );
}