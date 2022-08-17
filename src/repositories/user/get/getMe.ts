import type { User } from '@/types/user';

const getMe = async (): Promise<{ data: User }> => {
  return new Promise<{ data: User }>((resolve) => {
    resolve({
      data: {
        userId: 'dummy',
        name: 'ダミーユーザー',
        avatar:
          'https://images.unsplash.com/photo-1658890636421-3d3caa3a52b0?q=60',
      },
    });
  });
};

export default getMe;
