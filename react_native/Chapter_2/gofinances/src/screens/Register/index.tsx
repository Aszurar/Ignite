import React from 'react';
import { Input } from '../../components/Form/Input';
import { Container, Form, Header, Title } from './styles';

export function Register(){
    return (
        <Container>            
            <Header>
                <Title>Cadastro</Title>
            </Header>
            
            <Form> 
                <Input 
                    placeholder="Nome"
                    autoCapitalize="sentences"
                    autoCorrect={true} 
                    autoFocus={true}
                    returnKeyType="next"
                />
                <Input 
                    placeholder="Preço" 
                    autoCapitalize="none"
                    autoCorrect={false} 
                    keyboardType="numeric"
                    returnKeyType="next"
                />
            </Form>
        </Container>
    )
}