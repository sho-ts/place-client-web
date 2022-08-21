import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service'
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import { HomeHeader } from '@/components/organisms/home';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const HomePage: NextPageWithLayout = () => {
  const { data } = usePostsFindAllSWR();

  return (
    <Fragment>
      <Head>
        <title>{`ホーム | ${APP_NAME}`}</title>
      </Head>
      <HomeHeader />
      <Container>{data && <PostsGrid posts={data} xs={12} md={4} />}</Container>
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout auth>{page}</Layout>;

export default HomePage;
