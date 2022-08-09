import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import {
  AppBar as MUIAppBar,
  Container as MUIContainer,
  Toolbar,
  Typography,
  BottomNavigation as MUIBottomNavi,
  BottomNavigationAction,
  styled,
} from '@mui/material';
import { Home, Search, Person, AddBox } from '@mui/icons-material';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <AppName>PLACE</AppName>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <BottomNavigation>
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<Search />} />
        <BottomNavigationAction icon={<AddBox />} />
        <BottomNavigationAction icon={<Person />} />
      </BottomNavigation>
    </Fragment>
  );
};

const AppBar = styled(MUIAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const AppName = styled(Typography)(({ theme }) => ({
  fontSize: 20,
}));

const Container = styled(MUIContainer)(({ theme }) => ({
  paddingTop: 56 + 24,
  paddingBottom: 56,
  minHeight: '100vh',
  '@media screen and (min-width: 600px)': {
    paddingTop: 64 + 24,
  },
}));

const BottomNavigation = styled(MUIBottomNavi)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

export default Layout;
