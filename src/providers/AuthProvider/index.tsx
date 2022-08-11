import type { FC, ReactNode } from 'react';
import { defaultState } from '@/states/user/atom';
import { getMe } from '@/repositories/user/get';
import { useEffect, useRef, useState } from 'react';
import { useUserState } from '@/states';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  children?: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const isMounted = useRef(false);
  const [checked, setChecked] = useState(false);
  const [, setUser] = useUserState();

  useEffect(() => {
    if (isMounted.current) return;

    authService
      .getCurrentUser()
      .then(async () => {
        try {
          const response = await getMe();

          setUser({
            user: response.data,
            isLogin: true,
          });
        } catch (error) {
          throw new Error('ユーザー情報の取得に失敗');
        }
      })
      .catch(() => {
        setUser(defaultState);
      })
      .finally(() => {
        setChecked(true);
        isMounted.current = true;
      });
  }, []);

  if (checked) {
    return <Fragment>{children}</Fragment>;
  }

  return <Fragment />;
};

export default AuthProvider;
