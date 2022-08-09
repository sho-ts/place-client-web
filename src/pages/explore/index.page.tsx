import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { PostsGrid } from '@/components/organisms/post';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
import { Box, Button, TextField, styled } from '@mui/material';

const dummyDatas = [...Array(10)].map((_, index) => ({
  postId: `${index}`,
  author: {
    name: 'dummy',
    avatar: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  },
  content: 'dummy',
  imageUrl: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  createdAt: '2011-11-11 11:11',
}));

const ExplorePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        label="検索"
        variant="filled"
      />
      <PostsGrid posts={dummyDatas} />
    </Fragment>
  );
};

ExplorePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExplorePage;
