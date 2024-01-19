import { auth } from 'utils/auth';

const authRoutes = ['/dashboard'];

export default auth(req => {
  const { nextUrl } = req;
  const isLoggedIn = req.auth;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isAuthRoute) {
    if (isLoggedIn === null) {
      return Response.redirect(new URL('/', nextUrl));
    }
    return null;
  }
});
