import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return(
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5636D3'}/>
      <NavigationContainer>
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
  )
}

