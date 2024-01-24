import { Toolbar } from '@mui/material/index';

import MainMenu from './components/MainBox';
import NarBar from './components/NarBar';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <NarBar />
      <MainMenu>{children}</MainMenu>
    </>
  );
};

export default Layout;
