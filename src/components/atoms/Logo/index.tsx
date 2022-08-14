import type { FC } from 'react';
import { Typography, styled } from '@mui/material';
import Image from 'next/image';

type Props = {
  w?: number;
  h?: number;
};

const Logo: FC<Props> = ({ w = 117, h = 29 }) => {
  return (
    <AppLogo>
      <Image width={w} height={h} src="/logo.png" alt="" />
    </AppLogo>
  );
};

const AppLogo = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export default Logo;
