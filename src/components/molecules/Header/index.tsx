import type { FC } from 'react';
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <AppLogo>
          <Image width={117} height={29} src="/logo.png" />
        </AppLogo>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MUIAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const AppLogo = styled(Typography)(() => ({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  '@media screen and (min-width: 600px)': {
    margin: 0,
  },
}));

export default Header;
