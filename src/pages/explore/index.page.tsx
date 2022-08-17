import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { usePostsFindAllSWR } from '@/repositories/post/swr';
import { useRouter } from 'next/router';
import { ExploreHeader } from '@/components/organisms/exploer';
import { PostsGrid } from '@/components/organisms/post';
import { Layout, Container } from '@/components/templates';
import { Fragment } from 'react';

const ExplorePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { data } = usePostsFindAllSWR(router.query.keyword);

  return (
    <Fragment>
      <ExploreHeader />
      <Container>{data && <PostsGrid posts={data} />}</Container>
    </Fragment>
  );
};

ExplorePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ExplorePage;
