import type { FC } from 'react';
import type { User } from '@/types/user';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/material';
import Link from 'next/link';

type Props = {
  author: User;
  sx?: SxProps;
};

const PostAuthorName: FC<Props> = ({ author, sx }) => {
  return (
    <Base sx={sx}>
      <Link href={`/${author.userId}`}>
        <a>{author.userId}</a>
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
