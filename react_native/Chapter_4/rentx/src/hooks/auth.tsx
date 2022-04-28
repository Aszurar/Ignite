import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { database } from '../databases';
import { api } from '../services/api';
import { User as ModelUser } from '../databases/model/User';

interface UserProps {
  id: string; // id do usuário no banco de dados local(celuar)/watermelondb
  user_id: string; // id do usuário no banco de dados do back-end/sqlite
  name: string;
  email: string;
  avatar: string;
  driver_license: string;
  token: string;
}

interface UserResponseDataProps {
  user: Omit<UserProps, 'token' | 'user_id'>;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  //interface dos dados que serão compartilhados na aplicação.
  user: UserProps;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  isLogging: boolean;
  updatedUser: (user: UserProps) => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<UserProps>({} as UserProps);
  const [isLogging, setIsLogging] = useState(false);

  async function signIn({ email, password }: SignInCredentials) {
    setIsLogging(true);
    const response = await api.post('/sessions', {
      email,
      password,
    });

    if (response.data.message === 'Email or password incorrect!') {
      setIsLogging(false);
      console.log('Email ou senha incorretos');
      return Alert.alert('Erro na autenticação', 'Email ou senha incorretos');
    }

    setIsLogging(false);

    const { token, user } = response.data as UserResponseDataProps;
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    console.log('=========== dados vindo da api back-end ============');
    console.log('user', response.data);

    const userCollection = database.get<ModelUser>('users');

  //   try { 
  //    await database.write(async () => {
  //     await userCollection.create((newUser) => {
  //       (newUser.id = newUser.id),
  //         (newUser.user_id = user.id),
  //         (newUser.name = user.name),
  //         (newUser.email = user.email),
  //         (newUser.driver_license = user.driver_license),
  //         (newUser.avatar = user.avatar),
  //         (newUser.token = token);

  //         console.log('newUserCreated', newUser);
  //         setData(newUser._raw as unknown as UserProps);
  //     });
  //   });
  // } catch (error) {
  //   console.log('Erro ao criar usuário no banco de dados local', error);
  // }

    // forma do professor:
    await database.write(async () => {
      await userCollection
        .create((newUser) => {
          (newUser.id = newUser.id),
            (newUser.user_id = user.id),
            (newUser.name = user.name),
            (newUser.email = user.email),
            (newUser.driver_license = user.driver_license),
            (newUser.avatar = user.avatar),
            (newUser.token = token);
        })
        .then((userData) => {
          setData(userData._raw as unknown as UserProps);
        })
        .catch(() => {
          setIsLogging(false);
          return Alert.alert('Erro na autenticação', 'Não foi possível realizar o login!');
        });
    });
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as UserProps);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function updatedUser(user: UserProps) {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update((userData) => {
          (userData.name = user.name), (userData.driver_license = user.driver_license), (userData.avatar = user.avatar);
        });
      });
      setData(user);
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    let mounted = true;

    async function loadUserData() {
      const userCollection = database.get<ModelUser>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as UserProps;
        api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
        if(mounted){
          setData(userData);
        }
      }
      console.log('##### dados vindos do dispositivo local #####');

      console.log(response);
    }

    loadUserData();

    return () => {
      mounted = false;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLogging,
        signIn,
        signOut,
        updatedUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
