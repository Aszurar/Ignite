import React from 'react';

import {
    Container, 
    CarImage, 
    ImageContainer, 
    ImageIndexer, 
    ImageIndex,
    SlideImgCar,
} from './styles';

interface ImageSliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps){
    return (
        <Container>
            <ImageIndexer>
                {imagesUrl.map((_, index) => (
                    <ImageIndex key={String(index)} active={true} />
                ))}
            </ImageIndexer>
   
            <SlideImgCar
                data={imagesUrl}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <ImageContainer>
                        <CarImage
                            source={{ uri: item}}
                        />
                    </ImageContainer>
                )}
            />
        </Container>
    );
}