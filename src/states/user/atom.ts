import { atom, useRecoilState } from 'recoil';

export type UserState = {
  isLogin: boolean;
};

export const defaultState: UserState = {
  isLogin: false,
};

export const userState = atom<UserState>({
  key: 'userState',
  default: defaultState,
});

const useUserState = () => useRecoilState(userState);
export default useUserState;