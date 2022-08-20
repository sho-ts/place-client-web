import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { Post } from '@/types/post';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service'
import dynamic from 'next/dynamic';
import nookies from 'nookies';
import { getPost } from '@/repositories/post/get';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TypographyHeader } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>{`${post.user.userId}さんの投稿 | ${APP_NAME}`}</title>
      </Head>
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
  const cookies = nookies.get(context);

  try {
    if (!postId || typeof postId === 'object') {
      throw new Error('投稿IDが不正です');
    }

    const { data } = await getPost(postId, cookies.sub);

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
