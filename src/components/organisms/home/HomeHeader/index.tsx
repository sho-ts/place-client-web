import type { FC } from 'react';
import { Logo } from '@/components/atoms';
import { MobileBaseHeader } from '@/components/molecules';

const HomeHeader: FC = () => {
  return (
    <MobileBaseHeader>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Logo />
      </div>
    </MobileBaseHeader>
  );
};

export default HomeHeader;
