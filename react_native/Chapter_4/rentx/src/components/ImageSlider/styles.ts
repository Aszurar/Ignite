import { Dimensions, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexer = styled.View`
  flex-direction: row;
  align-self: flex-end;

  margin-right: ${RFValue(24)}px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132.35)}px;
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(280)}px;
  height: ${RFValue(132.35)}px;
`;

interface ImageProps {
  id: string;
  photo: string;
}

export const SlideImgCar = styled(FlatList as new () => FlatList<ImageProps>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
