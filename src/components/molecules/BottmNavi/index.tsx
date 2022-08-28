import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import {
  BottomNavigation as MUIBottomNavi,
  BottomNavigationAction,
  styled,
} from '@mui/material';
import { Home, Search, Person, AddBox } from '@mui/icons-material';

const Header: FC = () => {
  const router = useRouter();
  const [user] = useUserState();

  return (
    <BottomNavigation>
      <BottomNavigationAction
        onClick={() => router.push('/home')}
        icon={<Home sx={styles.icon} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/explore')}
        icon={<Search sx={styles.icon} />}
      />
      <BottomNavigationAction
        onClick={() => router.push('/post/compose')}
        icon={<AddBox sx={styles.icon} />}
      />
      <BottomNavigationAction
        onClick={() => router.push(`/${user.displayId}`)}
        icon={<Person sx={styles.icon} />}
      />
    </BottomNavigation>
  );
};

const styles = {
  icon: {
    color: '#333',
  },
};

const BottomNavigation = styled(MUIBottomNavi)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

export default Header;
