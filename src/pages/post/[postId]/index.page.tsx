import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import type { Props } from '@/server/post/getServerSidePropsPost';
import { APP_NAME } from '@/constants/service';
import dynamic from 'next/dynamic';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TypographyHeader } from '@/components/molecules';
import { Layout, Wrapper } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';
const PostArticlePC = dynamic(
  () => import('@/components/organisms/post/PostArticlePC')
);
const PostArticleMobile = dynamic(
  () => import('@/components/organisms/post/PostArticleMobile')
);

const PostPage: NextPageWithLayout<Props> = ({ post }) => {
  const matches = useMediaQuery('(max-width:700px)');

  return (
    <Fragment>
      <Head>
        <title>{`${post.user.displayId}さんの投稿 | ${APP_NAME}`}</title>
      </Head>
      <TypographyHeader>投稿</TypographyHeader>
      <Wrapper>
        {matches ? (
          <PostArticleMobile post={post} />
        ) : (
          <PostArticlePC post={post} />
        )}
      </Wrapper>
    </Fragment>
  );
};

export { default as getServerSideProps } from '@/server/post/getServerSidePropsPost';

PostPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default PostPage;
