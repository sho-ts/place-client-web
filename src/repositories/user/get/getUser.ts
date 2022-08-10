import type { User } from '@/types/user';

const getUser = async (userId: string): Promise<User> => {
  return new Promise<User>((resolve) => {
    resolve({
      authId: 'auth|xxxx',
      userId,
      name: 'ダミーユーザー',
      avatar: '',
    });
  });
};

export default getUser;
