import type { FC } from 'react';
import type { Post } from '@/types/post';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const PostsGrid: FC<Props> = ({ posts }) => {
  return (
    <Grid container spacing={1}>
      {posts.map(({ postId, files }) => (
        <Grid key={postId} xs={6} md={4}>
          <Item>
            <Link href={`/post/${postId}`}>
              <a>
                <Image src={files[0]} layout="fill" objectFit="cover" />
              </a>
            </Link>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

const Item = styled(Box)(() => ({
  position: 'relative',
  paddingTop: '120%',
}));

export default PostsGrid;
