import type { FC } from 'react';
import { useRouter } from 'next/router';
import { usePostSearch } from '@/hooks';
import {
  AppBar as MUIAppBar,
  Toolbar as MUIToolbar,
  TextField,
  IconButton,
  Box,
  styled,
} from '@mui/material';
import { Home, Search, Person, AddBox } from '@mui/icons-material';
import { Logo } from '@/components/atoms';

const PCHeader: FC = () => {
  const router = useRouter();
  const { keyword, handleSubmit, changeKeywordValue } = usePostSearch();

  return (
    <AppBar>
      <Toolbar>
        <Logo />
        <form
          onSubmit={handleSubmit}
          style={{ marginLeft: 'auto', width: 250 }}
        >
          <TextField
            onChange={changeKeywordValue}
            fullWidth
            size="small"
            label="検索"
            variant="outlined"
            value={keyword}
          />
        </form>
        <Icons>
          <IconButton onClick={() => router.push('/home')}>
            <Home sx={styles.icon} />
          </IconButton>
          <IconButton onClick={() => router.push('/explore')}>
            <Search sx={styles.icon} />
          </IconButton>
          <IconButton onClick={() => router.push('/post/compose')}>
            <AddBox sx={styles.icon} />
          </IconButton>
          <IconButton>
            <Person sx={styles.icon} />
          </IconButton>
        </Icons>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  icon: {
    color: '#333',
    width: 28,
    height: 28,
  },
};

const AppBar = styled(MUIAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const Toolbar = styled(MUIToolbar)(() => ({
  maxWidth: 900,
  width: '100%',
  margin: '0 auto',
}));

const Icons = styled(Box)(() => ({
  display: 'flex',
  gap: 8,
  marginLeft: 32,
}));

export default PCHeader;
