import type { FC, ReactNode } from 'react';
import type { Breakpoint } from '@mui/system/createTheme';
import { useUserState } from '@/states';
import { Fragment } from 'react';
import { Container as MUIContainer, styled } from '@mui/material';
import { Header, BottomNavi } from '@/components/molecules';
import { AuthProvider } from '@/providers';

type Props = {
  children?: ReactNode;
  maxW?: Breakpoint;
  auth?: boolean;
};

const Layout: FC<Props> = ({ children, maxW, auth }) => {
  const [user] = useUserState();

  return (
    <Fragment>
      <Header />
      {auth ? (
        <AuthProvider>
          <Container maxWidth={maxW}>{children}</Container>
        </AuthProvider>
      ) : (
        <Container maxWidth={maxW}>{children}</Container>
      )}
      {user.isLogin && <BottomNavi />}
    </Fragment>
  );
};

const Container = styled(MUIContainer)(({ theme }) => ({
  padding: '72px 8px',
  minHeight: '100vh',
  '@media screen and (min-width: 600px)': {
    paddingTop: 64 + 16,
  },
}));

export default Layout;
