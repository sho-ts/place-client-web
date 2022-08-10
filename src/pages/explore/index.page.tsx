import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { ExploreHeader } from '@/components/organisms/exploer';
import { PostsGrid } from '@/components/organisms/post';
import { Layout } from '@/components/templates';
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
  imageUrl: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
  createdAt: '2011-11-11 11:11',
}));

const dummyTags = [
  '大阪城',
  '琵琶湖',
  'カフェ',
  '家',
  '静岡県',
  '山',
  '淀川',
  '大阪城',
  '琵琶湖',
  'カフェ',
  '淀川',
];

const ExplorePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <PostsGrid posts={dummyPosts} />
    </Fragment>
  );
};

ExplorePage.getLayout = (page: ReactElement) => (
  <Layout>
    <ExploreHeader />
    {page}
  </Layout>
);

export default ExplorePage;
