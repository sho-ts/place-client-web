import type { FC } from 'react';
import type { Post } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { toggleLike } from '@/repositories/like/put';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';

type Props = {
  post: Post;
  sx?: SxProps;
  handleCommentsButtonClick?: () => void;
};

const PostIconButtons: FC<Props> = ({ post, sx, handleCommentsButtonClick }) => {
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
      <IconButton onClick={handleCommentsButtonClick}>
        <ChatBubbleOutlineOutlined sx={{ color: '#333' }} />
      </IconButton>
    </Box>
  );
};

export default PostIconButtons;
