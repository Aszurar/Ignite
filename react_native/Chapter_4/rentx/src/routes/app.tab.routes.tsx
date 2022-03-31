import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyCars } from '../screens/MyCars';
import { AppStackRoutes } from './app.stack.routes';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: RFValue(78),
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen
        name="Início"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg width={RFValue(24)} height={RFValue(24)} fill={color} />,
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => <CarSvg width={RFValue(24)} height={RFValue(24)} fill={color} />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <PeopleSvg width={RFValue(24)} height={RFValue(24)} fill={color} />,
        }}
      />
    </Navigator>
  );
}
