import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import { HomeHeader } from '@/components/organisms/home';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container, Wrapper } from '@/components/templates';
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
      <Wrapper>
        <Container sx={{ px: { xs: '0', md: '8px' } }}>
          {data && (
            <PostsGrid
              spacing={{ xs: '1px', md: 1 }}
              posts={data}
              xs={6}
              md={4}
            />
          )}
        </Container>
      </Wrapper>
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout auth>{page}</Layout>;

export default HomePage;
