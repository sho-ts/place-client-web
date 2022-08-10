import type { FC, ReactNode } from 'react';
import { Typography as MUITypography, Box, styled } from '@mui/material';
import { MobileBaseHeader } from '@/components/molecules';

type Props = {
  children?: ReactNode;
  renderRight?: () => JSX.Element;
  renderLeft?: () => JSX.Element;
};

const MobileTypographyHeader: FC<Props> = ({
  children,
  renderLeft,
  renderRight,
}) => {
  return (
    <MobileBaseHeader>
      <Inner>
        {renderLeft?.()}
        <span />
        <Typography>{children}</Typography>
        {renderRight?.()}
      </Inner>
    </MobileBaseHeader>
  );
};

const Typography = styled(MUITypography)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  fontWeight: 'bold',
  width: '100%',
}));

const Inner = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

export default MobileTypographyHeader;
