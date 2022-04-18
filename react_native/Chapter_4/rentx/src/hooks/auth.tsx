import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { database } from '../databases';
import { api } from '../services/api';
import { User as ModalUser } from '../databases/model/User';

interface userProps {
  id: string;
  user_id: string;
  name: string;
  email: string;
  avatar?: string;
  driver_license: string;
  token: string;
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
  const [data, setData] = useState<userProps>({} as userProps);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;
      console.log('=========== dados vindo da api back-end ============');
      console.log('user', response.data);

      const userCollection = database.get<ModalUser>('users');
      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id;
          newUser.name = user.name;
          newUser.email = user.email;
          newUser.avatar = user.avatar;
          newUser.driver_license = user.driver_license;
          newUser.token = token;
        });
      });

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ ...user, token });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModalUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as userProps);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadData() {
      const userCollection = database.get<ModalUser>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as userProps;
        api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
        setData(userData);
      }

      console.log('##### dados vindos do dispositivo local #####');

      console.log(response);
    }
    loadData();
  }, []);
  return (
    <AuthContext.Provider value={{ user: data, token: data.token, signIn, signOut }}>{children}</AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
