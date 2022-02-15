import React from 'react';

import {
    Container, ImageIndex, ImageIndexer
} from './styles';

export function Bullet(){
    
    
    return (
        
        <Container>
                        
            <ImageIndexer>
                {imagesUrl.map((_, index) => (
                    <ImageIndex key={String(index)} active={currentSlideImgIndex === index} />
                ))}
            </ImageIndexer>
        </Container>
    );
}