import type { User } from '@/types/user';

const getMe = async (): Promise<User> => {
  return new Promise<User>((resolve) => {
    resolve({
      authId: 'auth|xxxx',
      userId: 'dummy',
      name: 'ダミーユーザー',
      avatar: '',
    });
  });
};

export default getMe;
