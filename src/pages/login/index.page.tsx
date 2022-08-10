import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { AuthService } from '@/services';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { AuthForm } from '@/components/organisms/guest';
import { Layout, Container } from '@/components/templates';

const LoginPage: NextPageWithLayout = () => {
  const router = useRouter();

  const handleLogin = useCallback(async (email: string, password: string) => {
    const authService = new AuthService();
    try {
      await authService.login(email, password);
      router.push('/home');
    } catch (error) {
      alert('ログインに失敗しました');
    }
  }, []);

  return (
    <Container maxW="sm">
      <AuthForm handle={handleLogin} buttonInnerText="ログイン" />
    </Container>
  );
};

LoginPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default LoginPage;
