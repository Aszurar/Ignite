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

import LogoIcon from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { LoginButton } from '../../components/LoginButton';

export function SignIn() {
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
                {/* <LoginContainer>
                    <LoginButton 
                        type="google"
                        title="Entrar com Google"
                    /> 
                    <LoginButton 
                        type="apple"
                        title="Entrar com Apple"
                    />
                </LoginContainer> */}
            </Footer>
        </Container>    
    </>
    );
}