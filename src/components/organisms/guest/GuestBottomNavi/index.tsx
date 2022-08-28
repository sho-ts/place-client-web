import type { FC } from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { Button } from '@/components/atoms';

const GuestBottomNavi: FC = () => {
  return (
    <BottomNavi>
      <Button href='/login' variant="contained">ログイン</Button>
    </BottomNavi>
  );
};

const BottomNavi = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: theme.palette.common.white,
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  padding: `8px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  height: 56,
  zIndex: theme.zIndex.appBar,
}));

export default GuestBottomNavi;
