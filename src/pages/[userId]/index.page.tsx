import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '@/types/page';
import type { User } from '@/types/user';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { getUser } from '@/repositories/user/get';
import { TypographyHeader } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

type Props = {
  user: User;
};

const UserProfilePage: NextPageWithLayout<Props> = ({ user }) => {
  return (
    <Fragment>
      <Head>
        <title>{`${user.userId} | ${APP_NAME}`}</title>
      </Head>
      <TypographyHeader>{user.userId}</TypographyHeader>
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

    const response = await getUser(userId);

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

UserProfilePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default UserProfilePage;
