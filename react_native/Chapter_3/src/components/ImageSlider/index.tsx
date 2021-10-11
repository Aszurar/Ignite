import React from 'react';

import {
    Container, 
    CarImage, 
    ImageContainer, 
    ImageIndexer, 
    ImageIndex,
} from './styles';

interface ImageSliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps){
    return (
        <Container>
            <ImageIndexer>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexer>
   
            <ImageContainer>
                <CarImage
                    source={{ uri: imagesUrl[0]}}
                />
            </ImageContainer>
        </Container>
    );
}