import { Session } from 'next-auth';

export const isAdminSession = (session: Session | null) =>
  session?.user?.role === 'ADMIN';
