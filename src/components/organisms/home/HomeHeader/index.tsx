import type { FC } from 'react';
import { Logo } from '@/components/atoms';
import { BaseHeaderMobile } from '@/components/molecules';

const HomeHeader: FC = () => {
  return (
    <BaseHeaderMobile>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Logo />
      </div>
    </BaseHeaderMobile>
  );
};

export default HomeHeader;
