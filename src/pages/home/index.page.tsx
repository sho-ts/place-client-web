import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { HomeHeader } from '@/components/organisms/home';
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
  caption: 'dummy',
  images: ['https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60'],
  createdAt: '2011-11-11 11:11',
}));

const HomePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <HomeHeader />
      <Container><PostsGrid posts={dummyPosts} /></Container>
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout auth>{page}</Layout>;

export default HomePage;
