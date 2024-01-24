import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

import { UserRole } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    isAdmin: boolean;
  }
}
