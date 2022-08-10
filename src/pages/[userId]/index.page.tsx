import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { User } from '@/types/user';
import type { ReactElement } from 'react';
import { getUser } from '@/repositories/user/get';
import { MobileTypographyHeader } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';

type Props = {
  user: User;
};

const UserProfilePage: NextPageWithLayout<Props> = ({ user }) => {
  return (
    <Fragment>
      <MobileTypographyHeader>{user.userId}</MobileTypographyHeader>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const userId = context.query.userId;

  try {
    if (!userId || typeof userId === 'object') {
      throw new Error('ユーザーIDが不正です');
    }

    const user = await getUser(userId);

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

UserProfilePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default UserProfilePage;
