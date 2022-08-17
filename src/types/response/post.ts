import type { PostsItem } from '@/types/post';

export type PostsFindAllResponse = {
  items: PostsItem[];
  total: number;
};
