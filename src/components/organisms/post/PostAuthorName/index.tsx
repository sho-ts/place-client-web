import type { FC } from 'react';
import type { User } from '@/types/user';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

type Props = {
  user: User;
  sx?: SxProps;
};

const PostAuthorName: FC<Props> = ({ user, sx }) => {
  return (
    <Base sx={sx}>
      <Link href={`/${user.displayId}`}>
        <a>{user.displayId}</a>
      </Link>
    </Base>
  );
};

const Base = styled('p')(() => ({
  fontWeight: 'bold',
  fontSize: 14,
  display: 'inline-block',
}));

export default PostAuthorName;
