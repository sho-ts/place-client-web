import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { Post } from '@/types/post';
import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { getPost } from '@/repositories/post/get';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TypographyHeader } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
const PostArticlePC = dynamic(
  () => import('@/components/organisms/post/PostArticlePC')
);
const PostArticleMobile = dynamic(
  () => import('@/components/organisms/post/PostArticleMobile')
);

type Props = {
  post: Post;
};

const PostPage: NextPageWithLayout<Props> = ({ post }) => {
  const matches = useMediaQuery('(max-width:700px)');

  return (
    <Fragment>
      <TypographyHeader>投稿</TypographyHeader>
      {matches ? (
        <PostArticleMobile post={post} />
      ) : (
        <PostArticlePC post={post} />
      )}
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

    const { data } = await getPost(postId);

    return {
      props: {
        post: data,
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
