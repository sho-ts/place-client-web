import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';

type Props = {
  children?: ReactNode;
};

const UserList: FC<Props> = ({ children }) => {
  return <Base>{children}</Base>;
};

const Base = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 500px;
  margin-bottom: 16px;
  &::after {
    content: '';
    display: block;
    height: 1px;
    flex-shrink: 0;
  }
`;

export default UserList;
