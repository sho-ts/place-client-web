import type { PostsFindAllResponse } from '@/types/response/post';
import axios from 'axios';
import useSWR from 'swr';

const usePostsFindAllSWR = (search?: string | string[]) => {
  const query = search ? `&s=${search}` : '';

  return useSWR<PostsFindAllResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/posts?limit=12${query}`,
    (url) => axios.get(url).then((res) => res.data)
  );
};

export default usePostsFindAllSWR;
