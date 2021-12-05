import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

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

interface CarCardsProps extends RectButtonProps {
    data: CarCardData;
}

export function CarCards(
    {
        data,
        ...rest
    }: CarCardsProps
){
    return (
        <Container
            {...rest}
        >
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