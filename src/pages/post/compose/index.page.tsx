import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { PostComposeForm } from '@/components/organisms/post';
import { Layout } from '@/components/templates';

const PostComposePage: NextPageWithLayout = () => {
  return <PostComposeForm />;
};

PostComposePage.getLayout = (page: ReactElement) => (
  <Layout auth>{page}</Layout>
);

export default PostComposePage;
