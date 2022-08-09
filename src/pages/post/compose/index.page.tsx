import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { PostComposeForm } from '@/components/organisms/post';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';

const PostComposePage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <PostComposeForm />
    </Fragment>
  );
};

PostComposePage.getLayout = (page: ReactElement) => (
  <Layout auth maxW="sm">
    {page}
  </Layout>
);

export default PostComposePage;
