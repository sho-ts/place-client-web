import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { HomeHeader } from '@/components/organisms/home';
import { PostsGrid } from '@/components/organisms/post';
import { Layout } from '@/components/templates';

const dummyDatas = [...Array(10)].map((_, index) => ({
  postId: `${index}`,
  author: {
    authId: 'auth|xxxx',
    userId: 'dummy',
    name: 'dummy',
    avatar: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  },
  content: 'dummy',
  imageUrl: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  createdAt: '2011-11-11 11:11',
}));

const HomePage: NextPageWithLayout = () => {
  return <PostsGrid posts={dummyDatas} />;
};

HomePage.getLayout = (page: ReactElement) => (
  <Layout auth>
    <HomeHeader />
    {page}
  </Layout>
);

export default HomePage;
