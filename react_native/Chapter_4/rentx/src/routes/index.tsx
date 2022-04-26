import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { AppTabRoutes } from './app.tab.routes';

export function Routes() {
  const { user } = useAuth();
  return <NavigationContainer>{user.user_id ? <AppTabRoutes /> : <AuthRoutes />}</NavigationContainer>;
}
