import type { FC } from 'react';
import {
  AppBar as MUIAppBar,
  Toolbar,
  styled,
} from '@mui/material';
import { Logo } from '@/components/atoms';

const PCHeader: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Logo />
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

export default PCHeader;
