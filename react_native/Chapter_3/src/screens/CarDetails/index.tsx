import React from 'react';
import Animated, 
{ Extrapolate, 
    interpolate, 
    useAnimatedScrollHandler, 
    useAnimatedStyle, 
    useSharedValue 
} from 'react-native-reanimated';
import { StatusBar, StyleSheet } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    About,
    Accessories,
    Brand,
    Container, 
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    SliderContainer,
} from './styles';
import { SubmitButton } from '../../components/SubmitButton';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Accessory } from '../../components/Accessory';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export interface Params {
    car: CarDTO;
}
export function CarDetails(){
    const navigation = useNavigation<any>();
    
    const { params } = useRoute();
    const { car } = params as Params;
    
    const scrollY = useSharedValue(0)
    const headerHeightSize = {
        max: RFValue(200),
        min: RFValue(85),
    }
    
    function handleScheduling(){
        navigation.navigate('Scheduling', { car });
    }

    const handleScrollY = useAnimatedScrollHandler(scrollYValue => {
        scrollY.value = scrollYValue.contentOffset.y;
    })

    const handleStyleHeaderAnimation = useAnimatedStyle(() => {
       return{
           height: interpolate(
                scrollY.value,
                [0, 200],
                [headerHeightSize.max, headerHeightSize.min],
                Extrapolate.CLAMP
           )
       } 
    })
    const handleImageAnimation = useAnimatedStyle(() => {
        return{
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP
            )
        }   
    })
    return (
        <Container>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Animated.View
                style={[handleStyleHeaderAnimation, styles.header]}
            >
                <Header>
                    <BackButton />
                </Header>

            <Animated.View style={[handleImageAnimation]}>
                <SliderContainer>
                    <ImageSlider 
                        imagesUrl={car.photos}
                        />
                </SliderContainer>
            </Animated.View>                
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: RFValue(24),
                    alignItems: 'center',
                    paddingTop: getStatusBarHeight() + 160, 
                }}
                showsVerticalScrollIndicator={false}
                onScroll={handleScrollY}
                scrollEventThrottle={16}
                >
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {   car.accessories.map(accessory => (
                        <Accessory
                        key={accessory.type}
                        name={accessory.name}
                        icon={getAccessoryIcon(accessory.type)} 
                        />
                        ))
                    }
                </Accessories>

                <About>
                    {car.about} {'\n'}
                    {car.about} {'\n'}
                    {car.about} {'\n'}
                    {car.about} {'\n'}
                    {car.about} {'\n'}
                </About>
            </Animated.ScrollView>

            <Footer>
                <SubmitButton 
                    greenBackground={false}
                    text="Escolher período do aluguel"
                    onPress={handleScheduling}
                />
            </Footer>

        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1,
    }
})