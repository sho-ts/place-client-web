import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { ChangeProfileForm } from '@/components/organisms/account';
import { Layout } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const AccountEditPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>{`プロフィールを編集 | ${APP_NAME}`}</title>
      </Head>
      <ChangeProfileForm />
    </Fragment>
  );
};

AccountEditPage.getLayout = (page: ReactElement) => (
  <Layout auth>{page}</Layout>
);

export default AccountEditPage;
