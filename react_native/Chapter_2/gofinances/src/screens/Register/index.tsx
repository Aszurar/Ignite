import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Container, Fields, Form, Header, Title, TypeTransactionContainer } from './styles';

export function Register(){
    const [transactionType, settransactionType] = useState(''); 
    

    function handleSelectTransactionType(type: 'up' | 'down') {
        settransactionType(type);
        console.log(transactionType);
        
    }

    return (
        <Container>            
            <Header>
                <Title>Cadastro</Title>
            </Header>
            
            <Form> 
                <Fields> 
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

                    <TypeTransactionContainer> 
                        <TransactionTypeButton 
                            type="up" 
                            text="income"
                            onPress={() => handleSelectTransactionType('up')}    
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                            type="down" 
                            text="outcome"
                            onPress={() => handleSelectTransactionType('down')}    
                            isActive={transactionType === 'down'}
                        />
                    </TypeTransactionContainer>

                    <CategorySelect text="Categoria"/>
                </Fields>

                <Button text="Enviar"/>
            </Form>
        </Container>
    )
}