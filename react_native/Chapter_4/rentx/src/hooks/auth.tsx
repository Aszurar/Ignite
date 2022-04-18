import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from 'react';
import { Alert } from 'react-native';

import { api } from '../services/api';
import { database } from '../databases';
import { User as ModelUser } from '../databases/model/User';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  isLogging: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updatedUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
<<<<<<< HEAD
  const [data, setData] = useState<userProps>({} as userProps);
=======
  const [data, setData] = useState<User>({} as User);
  const [isLogging, setIsLogging] = useState(false);
>>>>>>> master

  async function signIn({ email, password }: SignInCredentials) {
    setIsLogging(true);

    const response = await api.post('/sessions', {
      email,
      password
    });

    if (response.data.message === "Email or password incorret!") {
      setIsLogging(false);

      return Alert.alert(
        'Erro na autenticação',
        'E-mail ou usuário inválido!'
      )
    }

    setIsLogging(false);

    const { token, user } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    const userCollection = database.get<ModelUser>('users');
    await database.action(async () => {
      await userCollection.create((newUser) => {
        newUser.id = newUser.id,
          newUser.user_id = user.id,
          newUser.name = user.name,
          newUser.email = user.email,
          newUser.driver_license = user.driver_license,
          newUser.avatar = user.avatar,
          newUser.token = token
      }).then((userData) => {
        setData(userData._raw as unknown as User);
      }).catch(() => {
        setIsLogging(false);
        return Alert.alert(
          'Erro na autenticação',
          'Não foi possível realizar o login!'
        )
      })
    });
  }

  async function signOut() {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.action(async () => {
        const userSelected = await userCollection.find(data.id);
        await userSelected.destroyPermanently();
      });

      setData({} as User);
    } catch (error) {
      return Alert.alert(
        'Erro na atualização',
        'Não foi possível atualizar os dados do usuário!'
      )

      console.log(error);
    }
  }

  async function updatedUser(user: User) {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.action(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update((userData) => {
          userData.name = user.name,
            userData.driver_license = user.driver_license,
            userData.avatar = user.avatar
        });
      });

      setData(user);

    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const userCollection = database.get<ModelUser>('users');
      const response = await userCollection.query().fetch();

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User;

        api.defaults.headers.authorization = `Bearer ${userData.token}`;
        setData(userData);
      }
    }

    loadUserData();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLogging,
        signIn,
        signOut,
        updatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };