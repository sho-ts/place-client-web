import type { FC, ChangeEvent } from 'react';

import CryptoJS from 'crypto-js';
import { AuthService } from '@/services';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, TextLink } from '@/components/atoms';
import { Fragment } from 'react';

const RegisterForm: FC = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: '',
    userId: '',
    name: '',
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

  const changeNameValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        name: event.target.value,
      });
    },
    [formValues]
  );

  const changeUserIdValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        userId: event.target.value,
      });
    },
    [formValues]
  );

  const handleRegister = useCallback(async () => {
    const authService = new AuthService();
    try {
      await authService.register(
        formValues.name,
        formValues.userId,
        formValues.email,
        formValues.password
      );
      router.push(`/register/verify?e=${CryptoJS.AES.encrypt(formValues.email, process.env.NEXT_PUBLIC_CRYPTO_KEY)}`);
    } catch (error) {
      alert('新規登録に失敗しました');
    }
  }, [formValues]);

  return (
    <Fragment>
      <TextField
        onChange={changeUserIdValue}
        sx={{ mb: 2 }}
        fullWidth
        label="ユーザーID"
        variant="filled"
        value={formValues.userId}
      />
      <TextField
        onChange={changeNameValue}
        sx={{ mb: 2 }}
        fullWidth
        label="ニックネーム"
        variant="filled"
        value={formValues.name}
      />
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
        onClick={handleRegister}
      >
        新規登録
      </Button>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <TextLink href="/login">ログインはこちら</TextLink>
      </Box>
    </Fragment>
  );
};

export default RegisterForm;
