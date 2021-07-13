import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';
import { categories } from '../utils/category';
import { 
        Category, 
        Container, 
        Footer, 
        Header, 
        Icon, 
        Name, 
        Separator, 
        Title } 
from './style';

interface Category {
    key: string;
    name: string;
}

interface CategorySelectProps {
    category: Category;
    setCategory: (category: Category) => void; // função que atualizará a catogria selecionada
    closeSelectCategory: () => void; // função que fechará a seleção de categorias
}

export function CategorySelect(
{ 
    category, 
    setCategory, 
    closeSelectCategory 
}: CategorySelectProps) {

    function handleCategorySelect(category: Category) {
        setCategory(category)
    }

    return(
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
        
            <FlatList 
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={item => item.key}
                renderItem={ ({ item }) => 
                (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon}
                          isActive={category.key === item.key}                        
                        />
                        <Name>
                            {item.name}
                        </Name>
                    </Category>
                 )
                }
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <Button text="Selecionar" 
                    onPress={closeSelectCategory}
                />
            </Footer>
        </Container>
        );
}