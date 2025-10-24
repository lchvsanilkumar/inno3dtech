// src/app/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      const adminEmail = process.env.NEXTAUTH_ADMIN_EMAIL;
      // Allow sign-in only if the user has the admin email
      if (user.email === adminEmail) {
        return true;
      } else {
        return false;
      }
    },
    async jwt({ token, account, user }) {
      // Ensure the user object is available and populated in the JWT callback
      if (user) {
        token.email = user.email;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Ensure the session object contains the accessToken
      session.accessToken = token.accessToken;
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/dummy",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  debug: true, // Enable debug mode to get detailed logs
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
