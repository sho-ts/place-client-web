import type { GetServerSideProps } from 'next';
import type { Post } from '@/types/post';
import nookies from 'nookies';
import { getPost } from '@/repositories/post/get';

export type Props = {
  post: Post;
};

const getServerSidePropsPost: GetServerSideProps<Props> = async (context) => {
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

export default getServerSidePropsPost;
