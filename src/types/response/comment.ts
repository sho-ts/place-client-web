import type { Comment } from '@/types/comment';

export type CommentsFindAllResponse = {
  items: Comment[];
  total: number;
};
