import type { FC } from 'react';
import type { User } from '@/types/user';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { Avatar, Box, styled } from '@mui/material';
import { PostAuthorName } from '@/components/organisms/post';

type Props = {
  author: User;
  sx?: SxProps;
};

const PostAuthor: FC<Props> = ({ author, sx }) => {
  return (
    <Base sx={sx}>
      <Avatar alt={author.name} src={author.avatar} />
      <PostAuthorName sx={{ ml: 2 }} author={author} />
    </Base>
  );
};

const Base = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export default PostAuthor;
