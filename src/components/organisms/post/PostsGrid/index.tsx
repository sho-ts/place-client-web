import type { FC } from 'react';
import type { Post } from '@/types/post';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

type Props = {
  posts: Post[];
};

const PostsGrid: FC<Props> = ({ posts }) => {
  return (
    <Grid container spacing={1}>
      {posts.map(({ postId, imageUrl }) => (
        <Grid key={postId} xs={6} md={4}>
          <Item>
            <Image src={imageUrl} layout="fill" objectFit="cover" />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

const Item = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '120%',
}));

export default PostsGrid;
