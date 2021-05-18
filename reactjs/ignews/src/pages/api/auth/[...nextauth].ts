import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query as q } from 'faunadb';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn(user, account, profile) {
      // console.log(user); test! -> 
      // User é o objeto que possui os dados no meu perfil do github, os demais 
      // parâmetros guaram outros dados do meu perfil no github
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match( //procurando por um usuário pelo e-mail e comparando o e-mail do usuário
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
        q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
        return true;
      } catch {
        return false;
      }
    },
  }
})