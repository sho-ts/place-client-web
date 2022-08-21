import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import { useRouter } from 'next/router';
import { ExploreHeader } from '@/components/organisms/exploer';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container, Wrapper } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const ExplorePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = usePostsFindAllSWR({ search: router.query.keyword });

  return (
    <Fragment>
      <Head>
        <title>{`見つける | ${APP_NAME}`}</title>
      </Head>
      <ExploreHeader />
      <Wrapper>
        <Container sx={{ px: { xs: '0', md: '8px' } }}>
          {data && (
            <PostsGrid spacing={{ xs: '1px', md: 1 }} posts={data} xs={4} />
          )}
        </Container>
      </Wrapper>
    </Fragment>
  );
};

ExplorePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExplorePage;
