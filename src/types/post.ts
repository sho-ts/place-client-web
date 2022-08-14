import type { User } from '@/types/user';

export type Post = {
  postId: string;
  user: User;
  files: string[];
  caption: string;
  createdAt: string;
};

export type Comment = {
  user: User;
  content: string;
  createdAt: string;
};
