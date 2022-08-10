import type { FC, ReactNode } from 'react';
import { Typography as MUITypography, styled } from '@mui/material';
import { MobileBaseHeader } from '@/components/molecules';

type Props = {
  children?: ReactNode;
};

const MobileTypographyHeader: FC<Props> = ({ children }) => {
  return (
    <MobileBaseHeader>
      <Typography>{children}</Typography>
    </MobileBaseHeader>
  );
};

const Typography = styled(MUITypography)(() => ({
  textAlign: 'center',
  fontWeight: 'bold',
  width: '100%',
}));

export default MobileTypographyHeader;
