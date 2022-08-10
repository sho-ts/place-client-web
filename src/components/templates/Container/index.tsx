import type { FC, ReactNode } from 'react';
import type { Breakpoint } from '@mui/system/createTheme';
import { Container as MUIContainer, styled } from '@mui/material';

type Props = {
  children?: ReactNode;
  maxW?: Breakpoint;
};

const Container: FC<Props> = ({ children, maxW = 'md' }) => {
  return <Body maxWidth={maxW}>{children}</Body>;
};

const Body = styled(MUIContainer)(({ theme }) => ({
  padding: '72px 8px',
  minHeight: '100vh',
  '@media screen and (min-width: 1200px)': {
    paddingTop: 64 + 24,
  },
}));

export default Container;
