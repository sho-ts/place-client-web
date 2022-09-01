import { FOLLOW_STATUS } from '@/constants/follow';

export type User = {
  userId: string;
  displayId: string;
  name: string;
  avatar: string;
};

export type UserDetail = User & {
  followStatus: FOLLOW_STATUS;
};
