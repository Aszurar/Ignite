import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from '../screens/Home';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { CarDetails } from '../screens/CarDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();
export function StackRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="SignIn"
        >
            <Screen 
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Screen 
                name="SignIn"
                component={SignIn}
            />
            <Screen 
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />
            <Screen 
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingComplete"
                component={SchedulingComplete}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
        </Navigator>
    );
}