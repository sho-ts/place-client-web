import type { FC } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@/components/molecules';

type RenderUserListArgs = {
  handleRequestClose: () => void;
  handleRouteChange: (displayId: string) => void;
};

type Props = {
  isOpen: boolean;
  handleRequestClose: () => void;
  renderUserList: (args: RenderUserListArgs) => JSX.Element;
};

const UserListModal: FC<Props> = ({
  isOpen,
  handleRequestClose,
  renderUserList,
}) => {
  const router = useRouter();

  const handleRouteChange = useCallback(
    (displayId: string) => {
      handleRequestClose();
      router.push(`/${displayId}`);
    },
    [router]
  );

  return (
    <Modal isOpen={isOpen} handleRequestClose={handleRequestClose} contentStyle={{
      width: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 120px)',
      maxWidth: '500px'
    }}>
      {renderUserList({ handleRequestClose, handleRouteChange })}
    </Modal>
  );
};

export default UserListModal;
