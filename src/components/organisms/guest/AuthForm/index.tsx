import type { FC, ChangeEvent } from 'react';

import { useState, useCallback } from 'react';
import { Box, Button, TextField, styled } from '@mui/material';

type Props = {
  handle: (email: string, password: string) => void;
  buttonInnerText: string;
  renderFooter?: () => JSX.Element;
};

const AuthForm: FC<Props> = ({ handle, buttonInnerText, renderFooter }) => {
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

  return (
    <FormContainer>
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
        disabled={!formValues.email || !formValues.password}
        variant="contained"
        onClick={() => handle(formValues.email, formValues.password)}
      >
        {buttonInnerText}
      </Button>
      {renderFooter?.()}
    </FormContainer>
  );
};

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  jusifyContent: 'center',
  maxWidth: 500,
  margin: '0 auto',
}));

export default AuthForm;
