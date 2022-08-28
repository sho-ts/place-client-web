import type { FC, ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MUIAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';

type Props = {
  children?: ReactNode;
};

const BaseHeaderMobile: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  if (!matches) return <Fragment />;

  return (
    <AppBar>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MUIAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

export default BaseHeaderMobile;
