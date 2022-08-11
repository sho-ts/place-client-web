import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { LoginForm } from '@/components/organisms/guest';
import { Container } from '@/components/templates';

const LoginPage: NextPageWithLayout = () => {
  return <LoginForm />;
};

LoginPage.getLayout = (page: ReactElement) => (
  <Container maxW="sm">{page}</Container>
);

export default LoginPage;
