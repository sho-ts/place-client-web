import type { FC } from 'react';
import { usePostSearch } from '@/hooks';
import { TextField } from '@mui/material';
import { MobileBaseHeader } from '@/components/molecules';

const ExploerHeader: FC = () => {
  const { keyword, handleSubmit, changeKeywordValue } = usePostSearch();

  return (
    <MobileBaseHeader>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          onChange={changeKeywordValue}
          fullWidth
          size="small"
          label="検索"
          variant="outlined"
          value={keyword}
        />
      </form>
    </MobileBaseHeader>
  );
};

export default ExploerHeader;
