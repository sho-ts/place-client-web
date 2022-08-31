import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { VerifyEmailForm } from '@/components/organisms/guest';
import { GuestLayout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const VerifyEmailPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>{`仮登録完了 | ${APP_NAME}`}</title>
      </Head>
      <VerifyEmailForm />
    </Fragment>
  );
};

VerifyEmailPage.getLayout = (page: ReactElement) => (
  <GuestLayout>{page}</GuestLayout>
);

export default VerifyEmailPage;
