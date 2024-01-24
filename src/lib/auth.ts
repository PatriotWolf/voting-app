import { auth } from 'utils/auth';

export const isAuthAdmin = async () => {
  const session = await auth();

  return session?.user?.isAdmin;
};
