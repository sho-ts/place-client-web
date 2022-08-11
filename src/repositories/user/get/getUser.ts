import type { User } from '@/types/user';

const getUser = async (userId: string): Promise<{ data: User }> => {
  return new Promise<{ data: User }>((resolve) => {
    resolve({
      data: {
        authId: 'auth|xxxx',
        userId,
        name: 'ダミーユーザー',
        avatar:
          'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
      },
    });
  });
};

export default getUser;
