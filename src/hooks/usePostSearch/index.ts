import type { FC, FormEvent, ChangeEventHandler } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const usePostSearch = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.replace(`/explore?keyword=${keyword}`);
  };

  const changeKeywordValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setKeyword(event.target.value);
    },
    []
  );

  useEffect(() => {
    if (router.isReady) {
      setKeyword((router.query.keyword as string | undefined) ?? '');
    }
  }, [router]);

  return {
    keyword,
    changeKeywordValue,
    handleSubmit
  }
};

export default usePostSearch;
