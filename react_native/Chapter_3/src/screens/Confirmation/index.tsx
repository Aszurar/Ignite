import React from 'react';

import SucessBackgroundSVG from '../../assets/sucess_background.svg';
import DoneSvg from '../../assets/done.svg';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Footer, Subtitle, SucessBackgroundContainer, SucessTextContainer, Title } from './styles';

interface Params {
  title: string;
  subtitle: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const route = useRoute();

  const { title, subtitle, nextScreenRoute } = route.params as Params;

  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }
  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <SucessBackgroundContainer>
        <SucessBackgroundSVG width={width} />
      </SucessBackgroundContainer>

      <SucessTextContainer>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Subtitle>{subtitle}</Subtitle>
      </SucessTextContainer>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
