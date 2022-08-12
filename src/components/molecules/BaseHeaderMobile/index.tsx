import type { FC, ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AppBar as MUIAppBar, Toolbar, styled } from '@mui/material';
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
