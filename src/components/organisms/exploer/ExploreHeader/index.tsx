import type { FC, FormEvent } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField } from '@mui/material';
import { MobileBaseHeader } from '@/components/molecules';

const ExploerHeader: FC = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.replace(`${router.pathname}?keyword=${keyword}`);
  };

  useEffect(() => {
    if (router.isReady) {
      setKeyword((router.query.keyword as string | undefined) ?? '');
    }
  }, [router]);

  return (
    <MobileBaseHeader>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          onChange={(e) => setKeyword(e.target.value)}
          fullWidth
          size="small"
          label="検索"
          variant="outlined"
        />
      </form>
    </MobileBaseHeader>
  );
};

export default ExploerHeader;
