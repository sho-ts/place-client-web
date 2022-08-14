import type { User } from '@/types/user';
import type { Post } from '@/types/post';

const getPost = async (postId: string): Promise<Post> => {
  return new Promise<Post>((resolve) => {
    const user: User = {
      userId: 'dummy',
      name: 'ダミーユーザー',
      avatar: 'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
    };

    resolve({
      postId,
      user,
      files: ['https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60'],
      caption: 'テスト',
      createdAt: '2022-01-01 00:00:00',
    });
  });
};

export default getPost;
