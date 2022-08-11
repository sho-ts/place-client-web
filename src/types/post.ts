import type { User } from '@/types/user';

export type Post = {
  postId: string;
  author: User;
  images: string[];
  content: string;
  createdAt: string;
};
