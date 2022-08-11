import type { User } from '@/types/user';
import { atom, useRecoilState } from 'recoil';

export type UserState = {
  isLogin: boolean;
  user: User;
};

export const defaultState: UserState = {
  isLogin: false,
  user: {
    authId: '',
    userId: '',
    name: '',
    avatar: '',
  }
};

export const userState = atom<UserState>({
  key: 'userState',
  default: defaultState,
});

const useUserState = () => useRecoilState(userState);
export default useUserState;
