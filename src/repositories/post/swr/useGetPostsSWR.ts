import type { PostsItem } from '@/types/post';
import axios from 'axios';
import useSWR from 'swr';

const useGetPostsSWR = (search?: string | string[]) => {
  const query = search ? `&s=${search}` : '';

  return useSWR<PostsItem[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/post?limit=12${query}`,
    (url) => axios.get(url).then((res) => res.data)
  );
};

export default useGetPostsSWR;
