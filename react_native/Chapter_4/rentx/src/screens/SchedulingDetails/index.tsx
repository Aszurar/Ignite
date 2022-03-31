import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Feather } from '@expo/vector-icons';
import { SubmitButton } from '../../components/SubmitButton';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  About,
  Accessories,
  Brand,
  CalendarIcon,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  SliderContainer,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Accessory } from '../../components/Accessory';
import { Params } from '../CarDetails';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatform';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { api } from '../../services/api';

interface SchedulingDetailsParams extends Params {
  dates: string[];
}

interface RentalPeriodProps {
  startFormatted: string;
  endFormatted: string;
}

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);
  const [isLoading, setIsLoading] = useState(false);

  const { params } = useRoute();
  const { car, dates } = params as SchedulingDetailsParams;

  const rentalDays = Number(dates.length);
  const totalPrice = rentalDays * car.price;

  async function handleSchedulingComplete() {
    try {
      setIsLoading(true);
      const response = await api.get(`/schedules_bycars/${car.id}`);
      const unavailable_dates = [...response.data.unavailable_dates, ...dates];

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      });

      await api.post('/schedules_byuser', {
        user_id: 1,
        car: car,
        startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
        endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
      });

      navigation.navigate('Confirmation', {
        title: 'Carro alugado!',
        subtitle: `Agora você só precisa ir\n até a concessionária da RENTX\n pegar o seu automável`,
        nextScreenRoute: 'Home',
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      Alert.alert('Erro ao agendar o carro', 'Tente novamente mais tarde');
    }
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Header>
        <BackButton />
      </Header>

      <SliderContainer>
        <ImageSlider imagesUrl={car.photos} />
      </SliderContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory key={accessory.type} icon={getAccessoryIcon(accessory.type)} name={accessory.name} />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.background_secondary} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text_detail} />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.price} x{rentalDays} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {totalPrice}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <SubmitButton
          color={theme.colors.sucess}
          text="Alugar agora"
          onPress={() => handleSchedulingComplete()}
          enabled={!isLoading}
          loading={isLoading}
        />
      </Footer>
    </Container>
  );
}
