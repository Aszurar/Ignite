import { Home } from './src/screens/Home';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <ActivityIndicator />}
      </>
    </SafeAreaView>
  );
}