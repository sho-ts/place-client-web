import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { Post } from '@/types/post';

import { APP_NAME } from '@/constants/service';

import { getPost } from '@/repositories/post/get';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetPostCommentSWR } from '@/repositories/comment/swr';
import useMediaQuery from '@mui/material/useMediaQuery';

import { TypographyHeader } from '@/components/molecules';
import { PostComment, PostCommentForm } from '@/components/organisms/post';
import { Layout, Wrapper, Container } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';
import IconButton from '@mui/material/IconButton';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

type Props = {
  post: Post;
};

const PostCommentsPage: NextPageWithLayout<Props> = ({ post }) => {
  const matches = useMediaQuery('(max-width:700px)');
  const router = useRouter();
  const { data, mutate } = useGetPostCommentSWR(post.postId);

  const caption = {
    user: post.user,
    content: post.caption,
    createdAt: post.createdAt,
  };

  useEffect(() => {
    // 特定のwindow幅以上で閲覧している場合投稿ページに戻す
    if (!matches) router.push(`/post/${post.postId}`);
  }, [matches]);

  return (
    <Fragment>
      <Head>
        <title>{`${post.user.displayId}さんの投稿 | ${APP_NAME}`}</title>
      </Head>
      <TypographyHeader
        renderLeft={() => (
          <IconButton onClick={router.back}>
            <ArrowBackIos sx={{ color: '#333' }} />
          </IconButton>
        )}
      >
        コメント
      </TypographyHeader>
      <Wrapper sx={{ pb: '136px' }}>
        <Container>
          <PostComment comment={caption} />
          {data &&
            data.items.map((comment) => (
              <PostComment
                sx={{ mt: 2 }}
                key={comment.commentId}
                comment={comment}
              />
            ))}
          <PostCommentForm
            sx={{
              position: 'fixed',
              bottom: '72px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100% - 16px)',
            }}
            postId={post.postId}
            mutate={mutate}
          />
        </Container>
      </Wrapper>
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

PostCommentsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default PostCommentsPage;
