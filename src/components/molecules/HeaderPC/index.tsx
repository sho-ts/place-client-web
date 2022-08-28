import type { FC } from 'react';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { usePostSearch } from '@/hooks';
import { useUserState } from '@/states';
import MUIAppBar from '@mui/material/AppBar';
import MUIToolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Home from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import AddBox from '@mui/icons-material/AddBox';
import { Logo } from '@/components/atoms';

const PCHeader: FC = () => {
  const router = useRouter();
  const [user] = useUserState();
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
          <IconButton onClick={() => router.push(`/${user.displayId}`)}>
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
