import type { User } from '@/types/user';
import { atom, useRecoilState } from 'recoil';

export type UserState = {
  isLogin: boolean;
} & User;

export const defaultState: UserState = {
  isLogin: false,
  userId: '',
  name: '',
  avatar: '',
};

export const userState = atom<UserState>({
  key: 'userState',
  default: defaultState,
});

const useUserState = () => useRecoilState(userState);
export default useUserState;
