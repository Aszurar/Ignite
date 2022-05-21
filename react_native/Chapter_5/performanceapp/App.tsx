import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/Home';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor='#32fc9e' style='dark' />
      <Home />
    </View>
  );
}
