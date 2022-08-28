import type { FC, ReactNode } from 'react';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/material/styles';

type Props = {
  children?: ReactNode;
  sx?: SxProps;
};

const Wrapper: FC<Props> = ({ children, sx }) => {
  return <Body sx={sx}>{children}</Body>;
};

const Body = styled('div')(({ theme }) => ({
  padding: '72px 0',
  minHeight: '100vh',
  '@media screen and (min-width: 600px)': {
    paddingTop: 64 + 16,
  },
  '@media screen and (min-width: 1200px)': {
    paddingTop: 64 + 24,
  },
}));

export default Wrapper;
