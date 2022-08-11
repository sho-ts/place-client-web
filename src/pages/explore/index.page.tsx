import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { ExploreHeader } from '@/components/organisms/exploer';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container } from '@/components/templates';
import { Fragment } from 'react';

const dummyPosts = [...Array(10)].map((_, index) => ({
  postId: `${index}`,
  author: {
    authId: 'auth|xxxx',
    userId: 'dummy',
    name: 'dummy',
    avatar: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  },
  content: 'dummy',
  images: ['https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60'],
  createdAt: '2011-11-11 11:11',
}));

const ExplorePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <ExploreHeader />
      <Container>
        <PostsGrid posts={dummyPosts} />
      </Container>
    </Fragment>
  );
};

ExplorePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExplorePage;
