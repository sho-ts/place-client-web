import type { FC, ReactNode } from 'react';
import type { Breakpoint } from '@mui/system/createTheme';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { Container as MUIContainer, styled } from '@mui/material';

type Props = {
  children?: ReactNode;
  maxW?: Breakpoint;
  sx?: SxProps;
};

const Container: FC<Props> = ({ children, maxW = 'md', sx }) => {
  return (
    <MUIContainer maxWidth={maxW} sx={sx}>
      {children}
    </MUIContainer>
  );
};

export default Container;
