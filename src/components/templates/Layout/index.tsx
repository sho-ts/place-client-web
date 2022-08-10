import type { FC, ReactNode } from 'react';
import type { Breakpoint } from '@mui/system/createTheme';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Fragment } from 'react';
import { PCHeader, BottomNavi } from '@/components/molecules';
import { GuestBottomNavi } from '@/components/organisms/guest';
import { AuthProvider } from '@/providers';

type Props = {
  children?: ReactNode;
  auth?: boolean;
};

const omitRoutes = ['/login', '/register'];

const Layout: FC<Props> = ({ children, auth }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [user] = useUserState();
  const router = useRouter();

  return (
    <Fragment>
      {matches && <PCHeader />}
      {auth ? (
        <AuthProvider>{children}</AuthProvider>
      ) : (
        <Fragment>{children}</Fragment>
      )}
      {user.isLogin
        ? !matches && <BottomNavi />
        : omitRoutes.includes(router.pathname) || <GuestBottomNavi />}
    </Fragment>
  );
};

export default Layout;
