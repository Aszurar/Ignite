import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar } from "react-native";

import { CarCards } from "../../components/CarCards";
import { CarLoadingAnimated } from "../../components/CarLoadingAnimated";
import { CarDTO } from "../../dtos/CarDTO";

import { useNetInfo } from "@react-native-community/netinfo";
import { api } from "../../services/api";
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from "../../databases";
import { Car as ModelCar } from "../../databases/model/Car";
import {
    CarList,
    Container,
    Header,
    HeaderContent,
    Logo,
    Total,
} from "./styles";

export function Home() {
    const [cars, setCars] = useState<ModelCar[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const netinfo = useNetInfo();
    const navigation = useNavigation<any>();

    function handleCarDetails(car: CarDTO) {
        navigation.navigate("CarDetails", { car });
    }

    async function offlineHomeSynchronization() {
        await synchronize({
            database,
            pullChanges: async ({ lastPulledAt }) => {
                const response = await api.get(`/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

                const { changes, latestVersion } = response.data;
                console.log('====== changes ======');
                console.log(changes);

                return { changes, timestamp: latestVersion };
            },
            pushChanges: async ({ changes }) => {
                const user = changes.users;

                await api.post("users/sync", user);
            }
        });
    }

    useEffect(() => {
        let isMounted = true;

        async function fetchCars() {
            try {
                const carCollection = database.get<ModelCar>("cars");
                const cars = await carCollection.query().fetch();

                if (isMounted) {
                    setCars(cars);
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
        if (netinfo.isConnected == true) {
            offlineHomeSynchronization();
        }
    }, [netinfo.isConnected]);

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

                    {!isLoading && <Total>Total de {cars.length} carros</Total>}
                </HeaderContent>

            </Header>
            {isLoading ? (
                <CarLoadingAnimated />
            ) : (
                <CarList
                    data={cars}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CarCards
                            data={item}
                            onPress={() => handleCarDetails(item)}
                        />
                    )}
                />
            )}
        </Container>
    );
}
