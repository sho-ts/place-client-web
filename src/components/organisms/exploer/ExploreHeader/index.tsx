import type { FC } from 'react';
import { usePostSearch } from '@/hooks';
import { TextField } from '@mui/material';
import { BaseHeaderMobile } from '@/components/molecules';

const ExploerHeader: FC = () => {
  const { keyword, handleSubmit, changeKeywordValue } = usePostSearch();

  return (
    <BaseHeaderMobile>
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
    </BaseHeaderMobile>
  );
};

export default ExploerHeader;
