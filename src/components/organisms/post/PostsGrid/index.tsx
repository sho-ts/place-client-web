import type { FC } from 'react';
import type { PostsItem } from '@/types/post';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  posts: PostsItem[];
};

const PostsGrid: FC<Props> = ({ posts }) => {
  return (
    <Grid container spacing={1}>
      {posts.map(({ postId, thumbnail }) => (
        <Grid key={postId} xs={6} md={4}>
          <Item>
            <Link href={`/post/${postId}`}>
              <a>
                <Image src={thumbnail} layout="fill" objectFit="cover" />
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
