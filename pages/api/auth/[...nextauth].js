import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
require('dotenv').config();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
    pages: {
      signIn: "/auth/signin",
    },
    callbacks: {
      async session({session, token, user}){
        session.user.username = session.user.name
          .split(" ")
          .join("")
          .toLocaleLowerCase();
        
        session.user.uid = token.sub;
        return session;
      }
    }
})