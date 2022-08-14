import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { AuthService } from '@/services';
import { styled } from '@mui/material';
import { Logo } from '@/components/atoms';

const authService = new AuthService();

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (checked) return;

    authService
      .getCurrentUser()
      .then(async () => {
        router.push('/home')
      })
      .catch(() => {
        router.push('/explore')
      })
      .finally(() => {
        setChecked(true);
      });
  }, []);

  return (
    <Base>
      <Logo w={175} h={43} />
    </Base>
  );
};

const Base = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
