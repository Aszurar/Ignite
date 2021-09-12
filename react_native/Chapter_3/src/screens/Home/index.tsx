import React from "react";
import { StatusBar } from "react-native";
import { CarCardData, CarCards } from "../../components/CarCards";

import {
    CarList,
    Container, 
    Header,
    HeaderContent,
    Logo,
    Total,
} from "./styles";

export function Home(){
    const carData: CarCardData[] = [
        {
            thumbnail: "https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png",
            brand: "Audi",
            name: "RS 5 Coupé",
            rent: {
                period: "Ao dia",
                price: 120,
            },
        },
        {
            thumbnail: "https://pensecarros.com.br/cms/uploads/porsche-panamera-2-9-v6-e-hybrid-4-pdk-60f0ebf583b0a.png",
            brand: "Porsche",
            name: "Panamera",
            rent: {
                period: "Ao dia",
                price: 340,
            },
        },
        {
            thumbnail: "http://clipart-library.com/images_k/corvette-silhouette-clip-art/corvette-silhouette-clip-art-17.png",
            brand: "Chevrolet",
            name: "Corvette Z06",
            rent: {
                period: "Ao dia",
                price: 620,
            },
        },
        {
           thumbnail: "https://i.pinimg.com/originals/25/17/0f/25170f88757566370cc44f096916dd41.png",
           brand: "Lamborghini",
           name: "Huracan",
           rent: {
                period: "Ao dia",
                price: 120,
    
            },
        },
        {
            thumbnail: "https://images.dealer.com/ddc/vehicles/2021/Volvo/XC40/SUV/perspective/front-left/2021_76.png",
            brand: "volvo",
            name: "XC40",
            rent: {
                period: "Ao dia",
                price: 120,
            },
        },

        {
            thumbnail: "https://di-uploads-pod15.dealerinspire.com/lakeforestsportscars/uploads/2019/05/California-T.png",
            brand: "Ferrari",
            name: "California T",
            rent: {
                period: "Ao dia",
                price: 1000,
            },
        },
    ];
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

            <CarList
                data={carData}
                keyExtractor={item => item.name}
                renderItem={
                    ({ item }) => 
                        <CarCards data={item} 
                        />
                }
            />
        </Container>
    );
}