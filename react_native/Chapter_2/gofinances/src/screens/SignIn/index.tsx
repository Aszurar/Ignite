import React from 'react';
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
    const { user } = useAuth();
    console.log(user.);
    
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