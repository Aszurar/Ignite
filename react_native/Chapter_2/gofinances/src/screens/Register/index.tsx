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
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    function handleSelectTransactionType(type: 'up' | 'down') {
        settransactionType(type);
    }

    function handleCategoryModalOpen() {
        setCategoryModal(true);
    }
    
    function handleCategoryModalClose(){
        setCategoryModal(false);
    }

    function handleSubmitForm(){
        const data = {
            name,
            amount,
            transactionType,
            category
        }

        console.log('Formulário Padrão: ',data);
        
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
                        onChangeText={text => setName(text)}
                        returnKeyType="next"                        
                        />
                    <Input 
                        placeholder="Preço" 
                        autoCapitalize="none"
                        autoCorrect={false} 
                        keyboardType="numeric"
                        onChangeText={value => setName(value)}
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
                        text={category.name}
                        onPress={handleCategoryModalOpen}
                    />

                </Fields>

                <Button text="Enviar"
                    onPress={handleSubmitForm}
                />
            </Form>

            <Modal visible={categoryModal}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCategoryModalClose}
                />
            </Modal>
        </Container>
    )
        
}