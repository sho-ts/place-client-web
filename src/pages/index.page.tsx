import type { NextPage } from 'next';
import { APP_NAME } from '@/constants/service';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthService } from '@/services';
import { styled } from '@mui/material';
import { Logo } from '@/components/atoms';
import { Fragment } from 'react';
import Head from 'next/head';

const authService = new AuthService();

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (checked) return;

    authService
      .getCurrentUser()
      .then(async () => {
        router.push('/home');
      })
      .catch(() => {
        router.push('/explore');
      })
      .finally(() => {
        setChecked(true);
      });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{`${APP_NAME}`}</title>
      </Head>
      <Base>
        <Logo w={175} h={43} />
      </Base>
    </Fragment>
  );
};

const Base = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
