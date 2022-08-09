import type { FC } from 'react';
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <AppName>PLACE</AppName>
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

const AppName = styled(Typography)(({ theme }) => ({
  fontSize: 20,
}));

export default Header;
