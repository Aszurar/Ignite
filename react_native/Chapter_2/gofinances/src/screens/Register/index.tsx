import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TypeTransactionContainer } from './styles';

export function Register(){
    const [transactionType, settransactionType] = useState(''); 
    const [categoryModal, setCategoryModal] = useState(false);

    function handleSelectTransactionType(type: 'up' | 'down') {
        settransactionType(type);
    }

    function handleCategoryModalOpen() {
        setCategoryModal(true);
    }
    console.log(categoryModal);
    
    function handleCategoryModalClose(){
        setCategoryModal(false);
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

                    <CategorySelectButton  
                        text="Categoria"
                        onPress={handleCategoryModalOpen}
                    />

                </Fields>

                <Button text="Enviar"/>
            </Form>

            <Modal visible={categoryModal}>
                <CategorySelect 
                    closeSelectCategory={handleCategoryModalClose}
                />
            </Modal>
        </Container>
    )
        
}