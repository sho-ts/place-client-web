import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { PostComposeForm } from '@/components/organisms/post';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const PostComposePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>{`新規投稿 | ${APP_NAME}`}</title>
      </Head>
      <PostComposeForm />
    </Fragment>
  );
};

PostComposePage.getLayout = (page: ReactElement) => (
  <Layout auth>{page}</Layout>
);

export default PostComposePage;
