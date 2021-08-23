import React from 'react';
import { Alert } from 'react-native';
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

export function SignIn() {
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle(){
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
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
                    <LoginButton 
                        svg={AppleIcon}
                        title="Entrar com Apple"
                    />
                </LoginContainer>
            </Footer>
        </Container>    
    </>
    );
}