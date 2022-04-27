import React, { useEffect, useState } from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import { Alert, StatusBar } from 'react-native';
import { CarCards } from '../../components/CarCards';
import { useNavigation } from '@react-navigation/native';
import { CarList, Container, Header, HeaderContent, Logo, Total } from './styles';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { CarLoadingAnimated } from '../../components/CarLoadingAnimated';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const netinfo = useNetInfo();
  const navigation = useNavigation<any>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {
      try {
        const response = await api.get('/cars');

        if (isMounted) {
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    fetchCars();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (netinfo.isConnected) {
      Alert.alert('Conectado', 'Você está on-line');
    } else {
      Alert.alert('Desconectado', 'Você está off-line');
    }
  }, [netinfo.isConnected]);


  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo />

          {!isLoading && <Total>Total de {cars.length} carros</Total>}
        </HeaderContent>
      </Header>
      {isLoading ? (
        <CarLoadingAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarCards data={item} onPress={() => handleCarDetails(item)} />}
        />
      )}
    </Container>
  );
}
