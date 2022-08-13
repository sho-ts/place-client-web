import type { FC, ChangeEvent } from 'react';

import { AuthService } from '@/services';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import { TextField, Box, styled } from '@mui/material';
import { Button, Logo } from '@/components/atoms';
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
      router.push('/login');
    } catch (error) {
      alert('新規登録に失敗しました');
    }
  }, [formValues]);

  return (
    <Fragment>
      <Header>
        <Logo />
      </Header>
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
    </Fragment>
  );
};

const Header = styled(Box)(() => ({
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 40px',
}));

export default RegisterForm;
