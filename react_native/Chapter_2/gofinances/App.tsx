import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { AuthProvider, useAuth } from './src/hooks/auth';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }
  return(
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5636D3'}/>
        <AuthProvider>
          <Routes />  
        </AuthProvider>
    </ThemeProvider>
  )
}

