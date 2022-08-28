import type { FC } from 'react';
import type { User } from '@/types/user';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { PostAuthorName } from '@/components/organisms/post';

type Props = {
  user: User;
  sx?: SxProps;
};

const PostAuthor: FC<Props> = ({ user, sx }) => {
  return (
    <Base sx={sx}>
      <Avatar alt={user.name} src={user.avatar} />
      <PostAuthorName sx={{ ml: 2 }} user={user} />
    </Base>
  );
};

const Base = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export default PostAuthor;
