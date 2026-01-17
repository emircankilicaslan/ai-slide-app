import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID, // Google Cloud Console'dan alacaksın
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
      signIn: "/", 
  }
})