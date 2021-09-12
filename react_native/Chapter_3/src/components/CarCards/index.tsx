import React from 'react';

import {
    About,
    CarImg,
    Container,
    Content,
    FuelIcon,
    Info,
    InfoContainer,
    Name,
    Price,
    Title,
    Type
} from './styles';

export interface CarCardData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;
}

interface CarCardsProps {
    data: CarCardData;
}

export function CarCards(
    {
        data
    }: CarCardsProps
){
    return (
        <Container>
            <Content>
                <Info>
                    
                    <InfoContainer>
                        <Title>{data.brand}</Title>
                        <Name>{data.name}</Name>
                    </InfoContainer>                
                    
                    <About>
                        <InfoContainer>
                            <Title>{data.rent.period}</Title>
                            <Price>{`R$ ${data.rent.price}`}</Price>
                        </InfoContainer>

                        <Type>
                            <FuelIcon />
                        </Type>

                    </About>
                </Info>
                
                <CarImg 
                    source={{uri: data.thumbnail}}
                />
            </Content>
        </Container>
    );
}