import type { FC } from 'react';
import type { Post } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { toggleLike } from '@/repositories/like/put';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import { useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutlineOutlined,
} from '@mui/icons-material';

type Props = {
  post: Post;
  sx?: SxProps;
};

const PostIconButtons: FC<Props> = ({ post, sx }) => {
  const [user] = useUserState();
  const router = useRouter();
  const [liked, setLiked] = useState(!!post.liked);

  const handleToggleLike = useCallback(() => {
    if (!user.isLogin) {
      router.push('/login');
      return;
    }

    toggleLike(post.postId)
      .then(() => {
        setLiked(!liked);
      })
      .catch(() => {
        alert('API Error');
      });
  }, [user.isLogin, liked]);

  return (
    <Box sx={sx}>
      <IconButton onClick={handleToggleLike}>
        {liked ? (
          <Favorite sx={{ color: '#fd1d1d' }} />
        ) : (
          <FavoriteBorder sx={{ color: '#333' }} />
        )}
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineOutlined sx={{ color: '#333' }} />
      </IconButton>
    </Box>
  );
};

export default PostIconButtons;
