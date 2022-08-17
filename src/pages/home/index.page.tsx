import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import { HomeHeader } from '@/components/organisms/home';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container } from '@/components/templates';
import { Fragment } from 'react';

const HomePage: NextPageWithLayout = () => {
  const { data } = usePostsFindAllSWR();

  return (
    <Fragment>
      <HomeHeader />
      <Container>{data && <PostsGrid posts={data} />}</Container>
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout auth>{page}</Layout>;

export default HomePage;
