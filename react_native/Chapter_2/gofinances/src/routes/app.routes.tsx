import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';


type RootTabParamList  = {
    Listagem: undefined;
    Cadastrar: undefined;
    Resumo: undefined;
  };

const RootTab =  createBottomTabNavigator<RootTabParamList>();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <RootTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secundary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: "beside-icon",
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: RFValue(55),
                }
            }}
        >
            <RootTab.Screen 
                name="Listagem" 
                component={Dashboard} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather 
                            name="list" 
                            size={size} 
                            color={color} 
                        />
                    ))
                }}
                />
            <RootTab.Screen 
                name="Cadastrar" 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather 
                            name="dollar-sign" 
                            color={color} 
                            size={size} 
                        />
                    ))
                }}
            />
            <RootTab.Screen 
                name="Resumo" 
                component={Resume} 
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Feather 
                            name="pie-chart" 
                            size={size} 
                            color={color}
                        />
                    ))
                }}    
            />
        </RootTab.Navigator>
    );
}