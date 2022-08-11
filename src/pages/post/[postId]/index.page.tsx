import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { Post } from '@/types/post';
import type { ReactElement } from 'react';
import { getPost } from '@/repositories/post/get';
import { MobileTypographyHeader } from '@/components/molecules';
import { Layout, Container } from '@/components/templates';
import { Fragment } from 'react';

type Props = {
  post: Post;
};

const PostPage: NextPageWithLayout<Props> = ({ post }) => {
  return (
    <Fragment>
      <MobileTypographyHeader>投稿</MobileTypographyHeader>
      <Container></Container>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const postId = context.query.postId;

  try {
    if (!postId || typeof postId === 'object') {
      throw new Error('投稿IDが不正です');
    }

    const post = await getPost(postId);

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

PostPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default PostPage;
