import type { FC } from 'react';
import type { Post } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { Box, IconButton } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutlineOutlined } from '@mui/icons-material';

type Props = {
  post: Post;
  sx?: SxProps;
};

const PostIconButtons: FC<Props> = ({ post, sx }) => {
  return (
    <Box sx={sx}>
      <IconButton>
        <FavoriteBorder sx={{ color: '#333' }} />
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineOutlined sx={{ color: '#333' }} />
      </IconButton>
    </Box>
  );
};

export default PostIconButtons;
