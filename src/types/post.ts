import type { User } from '@/types/user';

export type Post = {
  postId: string;
  author: User;
  images: string[];
  caption: string;
  createdAt: string;
};
