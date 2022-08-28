import type { FC } from 'react';
import type { Post } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/material/styles';

type Props = {
  createdAt: string;
  sx?: SxProps;
};

const PostCreatedAt: FC<Props> = ({ createdAt, sx }) => {
  return <Base sx={sx}>{createdAt}</Base>;
};

const Base = styled('p')(({ theme }) => ({
  fontSize: 10,
  color: theme.palette.grey[700],
}));

export default PostCreatedAt;
