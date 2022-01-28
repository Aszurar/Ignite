import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { 
    Alert, 
    Keyboard, 
    Modal, 
    TouchableWithoutFeedback 
    } from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { 
    Container, 
    Fields, 
    Form, 
    Header, 
    Title, 
    TypeTransactionContainer 
} from './styles';
// import { CommonActions, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootBottomTabParamList = {
    Listagem: undefined;
}

type RegisterScreenNavigationProp = BottomTabNavigationProp<RootBottomTabParamList, 'Listagem'>;

type RegisterProps = {
    navigation: RegisterScreenNavigationProp;
    route: RegisterScreenNavigationProp;
}

interface FormData {
    name: string;
    amount: number;    
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O nome da transação é obrigatório'),
    amount: Yup
        .number()
        .typeError('O valor da transação deve ser numérico!')
        .required('O valor da transação é obrigatório')
});

export function Register({ navigation, route }: RegisterProps) {
    const [transactionType, settransactionType] = useState(''); 
    const [categoryModal, setCategoryModal] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    // const navigation = useNavigation();
    const { user } = useAuth();
    // function handleNavigationToListagem(){
    //     navigation.dispatch(
    //         CommonActions.navigate({
    //             name: 'Listagem',
    //         })
    //     );
    // }

    function handleSelectTransactionType(type: 'up' | 'down') {
        settransactionType(type);
    }
    
    function handleCategoryModalOpen() {
        setCategoryModal(true);
    }
    
    function handleCategoryModalClose(){
        setCategoryModal(false);
    }
    
    async function handleSubmitForm(form: FormData){
        const dataKey = `@gonfinances:transactions_user:${user.id}`;
        
        if (!transactionType) {
            return Alert.alert('Por favor, selecione o tipo de transação.')
        }
        if (category.key === 'category') {     
            return Alert.alert('Por favor, selecione o tipo de categoria.')
        }
        const data = {
            id: String(uuid.v4()),
            type: transactionType,
            name: form.name,
            amount: form.amount,
            category: category.key,
            date: new Date()
        }
        
        try {
            const oldData = await AsyncStorage.getItem(dataKey);
            const oldDataFormatted = oldData ? JSON.parse(oldData) : [];
            const newData = [
                ...oldDataFormatted,
                data
            ]
            
            await AsyncStorage.setItem(dataKey, JSON.stringify(newData));
            
            reset();
            settransactionType(''); 
            setCategory({
                key: 'category',
                name: 'Categoria',
            });
            
            Alert.alert("Dados salvos com sucesso!");
            navigation.navigate('Listagem');
            // handleNavigationToListagem();
            console.log('deu certo: ', route);
            
        } catch (error) {
            Alert.alert("Não foi possível salvar");
        }
    }
return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>            
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                
                <Form> 
                    <Fields> 
                        <InputForm 
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false} 
                            autoFocus={true}
                            returnKeyType="next"   
                            error={errors.name && errors.name.message}                     
                            />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço" 
                            autoCapitalize="none"
                            autoCorrect={false} 
                            keyboardType="numeric"
                            returnKeyType="next"
                            error={errors.amount && errors.amount.message}                     

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
                        onPress={handleSubmit(handleSubmitForm)}
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
        </TouchableWithoutFeedback>
    )
        
}