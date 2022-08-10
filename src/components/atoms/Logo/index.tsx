import type { FC } from 'react';
import { Typography, styled } from '@mui/material';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <AppLogo>
      <Image width={117} height={29} src="/logo.png" />
    </AppLogo>
  );
};

const AppLogo = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export default Logo;
