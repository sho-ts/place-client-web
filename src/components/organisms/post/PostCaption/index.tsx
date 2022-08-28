import type { FC } from 'react';
import type { Post } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';
import { PostAuthorName } from '@/components/organisms/post';
import Box from '@mui/material/Box';

type Props = {
  post: Post;
  sx?: SxProps;
};

const PostCaption: FC<Props> = ({ post, sx }) => {
  return (
    <Box sx={sx}>
      <PostAuthorName user={post.user} />
      <Caption sx={{ ml: 1 }}>{post.caption}</Caption>
    </Box>
  );
};

const Caption = styled('p')(() => ({
  fontSize: 13,
  display: 'inline',
  wordBreak: 'break-all',
}));

export default PostCaption;
