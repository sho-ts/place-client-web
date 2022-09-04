import type { GetServerSideProps } from 'next';
import type { UserDetail } from '@/types/user';
import nookies from 'nookies';
import { getUser } from '@/repositories/user/get';

export type Props = {
  user: UserDetail;
};

const getServerSidePropsUser: GetServerSideProps<Props> = async (
  context
) => {
  const displayId = context.query.userId;
  const cookies = nookies.get(context);

  try {
    if (!displayId || typeof displayId === 'object') {
      throw new Error('ユーザーIDが不正です');
    }

    const response = await getUser({ displayId, requestUserId: cookies.sub });

    return {
      props: {
        user: response.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default getServerSidePropsUser;