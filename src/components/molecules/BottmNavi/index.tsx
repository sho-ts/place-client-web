import type { FC } from 'react';
import { useRouter } from 'next/router';
import {
  BottomNavigation as MUIBottomNavi,
  BottomNavigationAction,
  styled,
} from '@mui/material';
import { Home, Search, Person, AddBox } from '@mui/icons-material';

const Header: FC = () => {
  const router = useRouter();

  return (
    <BottomNavigation>
      <BottomNavigationAction
        onClick={() => router.push('/home')}
        icon={<Home />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/explore')}
        icon={<Search />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/post/compose')}
        icon={<AddBox />}
      />
      <BottomNavigationAction icon={<Person />} />
    </BottomNavigation>
  );
};

const BottomNavigation = styled(MUIBottomNavi)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

export default Header;
