import type { User } from '@/types/user';
import { FOLLOW_STATUS } from '@/constants/follow';

export type FollowUser = User & {
  followStatus: FOLLOW_STATUS;
};
