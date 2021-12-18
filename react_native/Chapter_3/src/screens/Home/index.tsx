import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { CarCards } from "../../components/CarCards";
import { useNavigation } from '@react-navigation/native';

import {
    CarList,
    Container, 
    Header,
    HeaderContent,
    Logo,
    Total,
} from "./styles";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../components/Load";

export function Home(){
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<any>();

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', { car });
    }
    
    useEffect(() => {
        async function fetchCars(){
           try{
               const response = await api.get('/cars');
               setCars(response.data);
            } catch (error) {
                console.log(error);
           } finally {
               setIsLoading(false);
           }
        }
        fetchCars();
    }, []);

    return (
            <Container>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Header>
                    <HeaderContent>
                        <Logo />
                        <Total>Total de 12 carros</Total>
                    </HeaderContent>
                </Header>
            { isLoading ?
                <Load />
            : 
                <CarList
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({ item }) => 
                            <CarCards 
                                data={item} 
                                onPress={() => handleCarDetails(item)}
                            />
                    }
                />
            }
            </Container>
        );
    }