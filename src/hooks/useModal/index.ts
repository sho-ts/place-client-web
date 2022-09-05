import { useState, useCallback } from 'react';

type UseModalArgs = {
  isOpen?: boolean;
};

type UseModalReturn = [boolean, () => void, () => void];

const useModal = (args?: UseModalArgs): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(args?.isOpen ?? false);

  const handleRequestOpen = useCallback(() => {
    setIsOpen(true);
  }, [isOpen, setIsOpen]);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen, setIsOpen]);

  return [isOpen, handleRequestOpen, handleRequestClose];
};

export default useModal;
