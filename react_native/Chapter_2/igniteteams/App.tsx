import { ThemeProvider } from 'styled-components/native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import theme from '@theme/index';
import { Loading } from '@components/Loading';
// import { Groups } from '@screens/Groups';
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/NewGroup';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {
        //<Groups />
        fontsLoaded ? <NewGroup /> : <Loading />
      }
    </ThemeProvider>
  );
}