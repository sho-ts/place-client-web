import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { LoginForm } from '@/components/organisms/guest';
import { GuestLayout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const LoginPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>{`ログイン | ${APP_NAME}`}</title>
      </Head>
      <LoginForm />
    </Fragment>
  );
};

LoginPage.getLayout = (page: ReactElement) => <GuestLayout>{page}</GuestLayout>;

export default LoginPage;
