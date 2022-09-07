import type { FC } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {
  w?: number;
  h?: number;
};

const Logo: FC<Props> = ({ w = 186, h = 32 }) => {
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
