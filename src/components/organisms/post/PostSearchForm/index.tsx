import type { FC, FormEvent } from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TextField, Chip, Box } from '@mui/material';

type Props = {
  tags: string[];
};

const PostSearchForm: FC<Props> = ({ tags }) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.replace(`${router.pathname}?keyword=${keyword}`);
  };

  const handleTagSearch = useCallback(
    (index: number) => {
      setKeyword(tags[index]);
      router.replace(`${router.pathname}?keyword=${tags[index]}`);
    },
    [tags]
  );

  useEffect(() => {
    if (router.isReady) {
      setKeyword((router.query.keyword as string | undefined) ?? '');
    }
  }, [router]);

  return (
    <Box sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ mb: 2 }}
          fullWidth
          label="検索"
          variant="filled"
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {tags.map((tag, index) => (
            <Chip
              onClick={() => handleTagSearch(index)}
              key={index}
              label={tag}
              variant="outlined"
            />
          ))}
        </Box>
      </form>
    </Box>
  );
};

export default PostSearchForm;
