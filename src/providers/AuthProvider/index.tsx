import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  render: (isLogin: boolean) => JSX.Element;
};

const AuthProvider: FC<Props> = ({ render }) => {
  const router = useRouter();
  const isMounted = useRef(false);
  const [user, setUser] = useState<CognitoUser>();

  useEffect(() => {
    if (isMounted.current) return;

    authService
      .getCurrentUser()
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        router.push('/login');
      })
      .finally(() => {
        isMounted.current = true;
      });
  }, []);

  if (user) return render(!!user);
  return <Fragment />;
};

export default AuthProvider;
