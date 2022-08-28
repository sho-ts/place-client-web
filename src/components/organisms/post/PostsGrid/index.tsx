import type { FC } from 'react';
import type { PostsFindAllResponse } from '@/types/response/post';
import type { ResponsiveStyleValue } from '@/types/style';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  posts: PostsFindAllResponse;
  xs?: number;
  md?: number;
  spacing?: ResponsiveStyleValue<string | number>;
};

const PostsGrid: FC<Props> = ({ posts, xs, md, spacing = 1 }) => {
  return (
    <Grid container spacing={spacing}>
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
