import type { FC, ChangeEvent } from 'react';

import { AuthService } from '@/services';
import { getMe } from '@/repositories/user/get';
import { useUserState } from '@/states';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, TextLink } from '@/components/atoms';
import { Fragment } from 'react';

const LoginForm: FC = () => {
  const router = useRouter();
  const [, setUser] = useUserState();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const changeEmailValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        email: event.target.value,
      });
    },
    [formValues]
  );

  const changePasswordValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        password: event.target.value,
      });
    },
    [formValues]
  );

  const handleLogin = useCallback(async () => {
    const authService = new AuthService();
    try {
      await authService.login(formValues.email, formValues.password);

      const response = await getMe();
      setUser({
        isLogin: true,
        ...response.data,
      });

      router.push('/home');
    } catch (error) {
      alert('ログインに失敗しました');
    }
  }, [formValues]);

  return (
    <Fragment>
      <TextField
        onChange={changeEmailValue}
        sx={{ mb: 2 }}
        fullWidth
        label="メールアドレス"
        variant="filled"
        value={formValues.email}
      />
      <TextField
        type="password"
        onChange={changePasswordValue}
        sx={{ mb: 2 }}
        fullWidth
        label="パスワード"
        variant="filled"
        value={formValues.password}
      />
      <Button
        size="large"
        position="center"
        disabled={!formValues.email || !formValues.password}
        variant="contained"
        onClick={handleLogin}
      >
        ログイン
      </Button>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <TextLink href="/register">新規登録はこちら</TextLink>
      </Box>
    </Fragment>
  );
};

export default LoginForm;
