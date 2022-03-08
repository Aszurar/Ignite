import React from 'react';
import { AuthProvider, AuthProviderProps } from './auth';

//caso queira adicionar mais providers de outros hooks basta importá-lo aqui, e adicionar
// sua tag em volta do children assim como o AuthProvider
//ex:     <AuthProvider>
//               <TranlateProvider> -> Novo provider/hook adicionado!.
//                  {children}
//               </TranlateProvider> -> Novo provider/hook adicionado!.
//          </AuthProvider>

function AppProvider({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
