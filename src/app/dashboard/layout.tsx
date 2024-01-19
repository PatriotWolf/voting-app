import { Toolbar } from '@mui/material/index';

import NarBar from './components/NarBar';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <NarBar />
      {children}
    </>
  );
};

export default Layout;
