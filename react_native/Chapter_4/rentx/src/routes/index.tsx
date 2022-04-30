import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';
import { CarLoadingAnimated } from '../components/CarLoadingAnimated';

export function Routes() {
  const { user, isLoading } = useAuth();
  return (isLoading ? <CarLoadingAnimated /> :
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>);
}
