/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-underscore-dangle */
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Alert } from "react-native";

import { database } from "../databases";
import { User as ModelUser } from "../databases/model/User";
import { api } from "../services/api";

interface IUserProps {
    id: string; // id do usuário no banco de dados local(celuar)/watermelondb
    user_id: string; // id do usuário no banco de dados do back-end/sqlite
    name: string;
    email: string;
    avatar: string;
    driver_license: string;
    token: string;
}

interface IUserResponseDataProps {
    user: Omit<IUserProps, "token" | "user_id">;
    token: string;
}

interface ISignInCredentials {
    email: string;
    password: string;
}

interface IAuthContextProps {
    // interface dos dados que serão compartilhados na aplicação.
    user: IUserProps;
    signIn: (credentials: ISignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
    updatedUser: (user: IUserProps) => Promise<void>;
}

export interface IAuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

function AuthProvider({ children }: IAuthProviderProps) {
    const [data, setData] = useState<IUserProps>({} as IUserProps);
    const [isLoading, setIsLoading] = useState(true);

    async function signIn({ email, password }: ISignInCredentials) {
        // setIsLoading(true);
        const response = await api.post("/sessions", {
            email,
            password,
        });

        if (response.data.message === "Email or password incorrect!") {
            // setisLoading(false);
            console.log("Email ou senha incorretos");
            return Alert.alert(
                "Erro na autenticação",
                "Email ou senha incorretos"
            );
        }
        // setIsLoading(false);

        const { token, user } = response.data as IUserResponseDataProps;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        console.log("=========== dados vindo da api back-end ============");
        console.log("user", response.data);

        const userCollection = database.get<ModelUser>("users");

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
        //         setData(newUser._raw as unknown as IUserProps);
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
                    setData(userData._raw as unknown as IUserProps);
                })
                .catch(() => {
                    // setIsLoading(false);
                    return Alert.alert(
                        "Erro na autenticação",
                        "Não foi possível realizar o login!"
                    );
                });
        });
    }

    async function signOut() {
        try {
            const userCollection = database.get<ModelUser>("users");
            await database.write(async () => {
                const userSelected = await userCollection.find(data.id);
                await userSelected.destroyPermanently();
            });

            setData({} as IUserProps);
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async function updatedUser(user: IUserProps) {
        try {
            const userCollection = database.get<ModelUser>("users");
            await database.write(async () => {
                const userSelected = await userCollection.find(user.id);
                await userSelected.update((userData) => {
                    (userData.name = user.name),
                        (userData.driver_license = user.driver_license),
                        (userData.avatar = user.avatar);
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
            const userCollection = database.get<ModelUser>("users");
            const response = await userCollection.query().fetch();

            if (response.length > 0) {
                const userData = response[0]._raw as unknown as IUserProps;
                api.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
                if (mounted) {
                    setData(userData);
                    setIsLoading(false);
                }
            }
            console.log("##### dados vindos do dispositivo local #####");

            console.log(response);
        }

        loadUserData();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: data,
                isLoading,
                signIn,
                signOut,
                updatedUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContextProps {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
