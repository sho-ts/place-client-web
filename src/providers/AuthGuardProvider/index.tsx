import type { FC, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  children?: ReactNode;
};

const AuthGuardProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isMounted = useRef(false);
  const [user, setUser] = useUserState();

  useEffect(() => {
    if (isMounted.current || user.isLogin) return;

    authService
      .getCurrentUser()
      .then(() => {
        setUser({
          ...user,
          isLogin: true,
        });
      })
      .catch(() => {
        router.push('/login');
      })
      .finally(() => {
        isMounted.current = true;
      });
  }, []);

  if (user.isLogin) return <Fragment>{children}</Fragment>;
  return <Fragment />;
};

export default AuthGuardProvider;
