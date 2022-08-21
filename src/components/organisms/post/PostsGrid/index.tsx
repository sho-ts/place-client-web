import type { FC } from 'react';
import type { PostsFindAllResponse } from '@/types/response/post';
import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  posts: PostsFindAllResponse;
  xs?: number;
  md?: number;
};

const PostsGrid: FC<Props> = ({ posts, xs, md }) => {
  return (
    <Grid container spacing={1}>
      {posts.items.map(({ postId, thumbnail }) => (
        <Grid key={postId} xs={xs} md={md}>
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
