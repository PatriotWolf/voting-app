import NextAuth, { NextAuthConfig, User } from 'next-auth';
import { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const users = [
          { id: '1', name: 'Admin', email: 'admin@admin.com', isAdmin: true },
          { id: '2', name: 'User', email: 'user@test.com' },
        ];
        const user = users.find(user => user.email === credentials.email);

        return user || null;
      },
    }),
  ],
  callbacks: {
    // @ts-ignore //TODO:  fix token as JWT instead of any
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    jwt: ({ token, account, profile, user }) => {
      if (user) {
        token.isAdmin = (user as Session['user']).isAdmin;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
      }
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
