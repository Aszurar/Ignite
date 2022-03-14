import React, { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';

interface userProps {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  driver_license: string;
}

interface AuthState {
  //interface dos dados que serão armazenados no Estado de autenticação
  token: string;
  user: userProps;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  //interface dos dados que serão compartilhados na aplicação
  user: userProps;
  token: string;
  signIn: (credential: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const userStorageKey = '@rentx:user';

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    console.log(token);
    console.log(user);

    setData({ token, user });
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
