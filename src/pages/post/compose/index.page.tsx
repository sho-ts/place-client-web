import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { MobileTypographyHeader } from '@/components/molecules';
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
    <MobileTypographyHeader>新規投稿</MobileTypographyHeader>
    {page}
  </Layout>
);

export default PostComposePage;
