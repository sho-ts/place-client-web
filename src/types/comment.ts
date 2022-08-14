import type { User } from '@/types/user';

export type Comment = {
  commentId: string;
  postId: string;
  content: string;
  createdAt: string;
  user: User;
};
