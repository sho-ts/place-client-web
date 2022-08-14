import type { User } from '@/types/user';

export type Post = {
  postId: string;
  user: User;
  files: {
    id: string;
    url: string;
  }[];
  caption: string;
  createdAt: string;
};

export type PostsItem = {
  postId: string;
  user: User;
  thumbnail: string;
  caption: string;
  createdAt: string;
};

export type Comment = {
  user: User;
  content: string;
  createdAt: string;
};
