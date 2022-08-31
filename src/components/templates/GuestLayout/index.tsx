import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Logo } from '@/components/atoms';
import { Container, Wrapper } from '@/components/templates';

type Props = {
  children?: ReactNode;
};

const GuestLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container maxW="sm">
        <Header>
          <Logo />
        </Header>
        <div>{children}</div>
      </Container>
    </Wrapper>
  );
};

const Header = styled('div')(() => ({
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 40px',
}));

export default GuestLayout;
