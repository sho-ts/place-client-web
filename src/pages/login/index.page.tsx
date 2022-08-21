import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { APP_NAME } from '@/constants/service';
import { LoginForm } from '@/components/organisms/guest';
import { Container, Wrapper } from '@/components/templates';
import { Fragment } from 'react';
import Head from 'next/head';

const LoginPage: NextPageWithLayout = () => {
  return <LoginForm />;
};

LoginPage.getLayout = (page: ReactElement) => (
  <Fragment>
    <Head>
      <title>{`ログイン | ${APP_NAME}`}</title>
    </Head>
    <Wrapper>
      <Container maxW="sm">{page}</Container>
    </Wrapper>
  </Fragment>
);

export default LoginPage;
