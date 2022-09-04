import type { FollowUser } from '@/types/follow';

export type GetFollowsByDisplayIdResponse = {
  items: FollowUser[];
  total: number;
};

export type GetFollowersByDisplayIdResponse = {
  items: FollowUser[];
  total: number;
};
