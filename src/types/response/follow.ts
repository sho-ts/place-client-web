import type { User } from '@/types/user';

export type GetFollowsByDisplayIdResponse = {
  items: User[];
  total: number;
};

export type GetFollowersByDisplayIdResponse = {
  items: User[];
  total: number;
};
