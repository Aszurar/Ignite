import React, { 
    createContext, 
    ReactNode, 
    useContext, 
    useState 
} from "react";

import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthProviderProps {
    children: ReactNode
}

interface userProps {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextProps {
    user: userProps;
    signInWithGoogle(): Promise<void>;
    signInWithApple(): Promise<void>;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    }
    type: string;
}
// context create
const AuthContext = createContext({} as AuthContextProps);

// provider create
function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<userProps>({} as userProps);

    async function signInWithGoogle(){
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = 
            `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { params, type } = await AuthSession
            .startAsync({authUrl}) as AuthorizationResponse;
            
            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();

                setUser({
                    id: userInfo.id,
                    name: userInfo.given_name,
                    email: userInfo.email,
                    photo: userInfo.picture
                });
                console.log(userInfo);

            }
            
            
        } catch (error) {
            throw new Error(error as string);
        }
    }
    async function signInWithApple(){
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL
                ]
            });

            if (credential) {
                const userlogged = {
                    id: String(credential.user),
                    name: credential.fullName!.givenName!,
                    email: credential.email!,
                    photo: undefined
                };
                setUser(userlogged);
                // await AsyncStorage.setItem('@gofinances:user', JSON.stringify(userLogged));
            }        
        }catch (error) {
            throw new Error(error as string);
        }
    }

    return(
        <AuthContext.Provider value={{
            user, 
            signInWithGoogle, 
            signInWithApple 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

// hook create
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}