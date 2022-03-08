import React, { useRef, useState } from 'react';
import { ViewToken } from 'react-native';
import { Bullet } from '../Bullet';

import { Container, CarImage, ImageContainer, ImageIndexer, SlideImgCar } from './styles';

export interface ImageSliderProps {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}

interface ChangeImgProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [currentSlideImgIndex, setCurrentSlideImgIndex] = useState(0);

  const currentSlideImg = useRef((props: ChangeImgProps) => {
    setCurrentSlideImgIndex(props.viewableItems[0].index!);
  });

  return (
    <Container>
      <ImageIndexer>
        {imagesUrl.map((item, index) => (
          <Bullet key={item.id} active={currentSlideImgIndex === index} />
        ))}
      </ImageIndexer>

      <SlideImgCar
        data={imagesUrl}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageContainer>
            <CarImage source={{ uri: item.photo }} />
          </ImageContainer>
        )}
        onViewableItemsChanged={currentSlideImg.current}
      />
    </Container>
  );
}
