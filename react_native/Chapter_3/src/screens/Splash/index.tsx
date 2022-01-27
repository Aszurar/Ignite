import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate, runOnJS} from 'react-native-reanimated';
import LogoSVG from '../../assets/logo.svg';
import BrandSVG from '../../assets/brand.svg';

import {
    Container
} from './styles';

export function Splash(){
    const navigation = useNavigation<any>();
    const animation = useSharedValue(0);
    
    const LogoAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animation.value,
                [0, 25, 40,50],
                [0, 0.3, 0.5, 1],
                Extrapolate.CLAMP),
            transform: [
                {
                    translateX: interpolate(animation.value,
                        [0, 25, 50],
                        [200, 100, 0],
                        Extrapolate.CLAMP),
                }        
            ]
        }
    })
    const BrandAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animation.value,
                [0, 25, 50],
                [1, 0.5, 0],
            ),
            transform: [
                {
                    translateX: interpolate(animation.value,
                        [0, 25, 50],
                        [0, 50, 120],
                        Extrapolate.CLAMP),
                },
            ]
        }
    })

    function startApp(){
        navigation.navigate('Home');
    }

    useEffect(() => {
        animation.value = withTiming(50,
           { duration: 3000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );
    }, [])

return (
        <Container>
            <Animated.View style={[BrandAnimation, {position: 'absolute',}]}>
                <BrandSVG
                    width={80}
                    height={40}
                />
            </Animated.View>

            <Animated.View style={[LogoAnimation, {position: 'absolute',}]}>
                <LogoSVG
                    width={180}
                    height={20}
                />
            </Animated.View>
        </Container>
    );
}