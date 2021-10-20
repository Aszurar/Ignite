import React from 'react';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { 
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';

import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedullingDetails } from './src/screens/SchedullingDetails';
import { SchedulingComplete } from './src/screens/SchedulingComplete';


export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
        {/* <Home /> */}
        {/* <CarDetails /> */}
        {/* <Scheduling /> */}
        {/* <SchedullingDetails /> */}
        <SchedulingComplete />
    </ThemeProvider>
  )
}

