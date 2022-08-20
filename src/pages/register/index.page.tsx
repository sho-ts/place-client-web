import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { RegisterForm } from '@/components/organisms/guest';
import { Container } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const RegisterPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>{`新規登録 | ${APP_NAME}`}</title>
      </Head>
      <RegisterForm />
    </Fragment>
  );
};

RegisterPage.getLayout = (page: ReactElement) => (
  <Container maxW="sm">{page}</Container>
);

export default RegisterPage;
