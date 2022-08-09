import type { User } from '@/types/user';

export type Post = {
  postId: string;
  author: User;
  imageUrl: string;
  content: string;
  createdAt: string;
}