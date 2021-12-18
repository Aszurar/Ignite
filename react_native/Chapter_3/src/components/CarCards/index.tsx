import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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

interface CarCardsProps extends RectButtonProps {
    data: CarDTO;
}

export function CarCards(
    {
        data,
        ...rest
    }: CarCardsProps
){
const MotorIcon = getAccessoryIcon(data.fuel_type);
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
                            <MotorIcon />
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