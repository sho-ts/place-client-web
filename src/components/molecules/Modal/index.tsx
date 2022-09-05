import type { FC, ReactNode, CSSProperties } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

type Props = {
  isOpen: boolean;
  children?: ReactNode;
  contentStyle?: CSSProperties;
  handleRequestClose?: () => void;
};

const Modal: FC<Props> = ({
  isOpen,
  children,
  contentStyle,
  handleRequestClose,
}) => {
  return (
    <ReactModal
      style={{
        overlay: { ...styles.overlay },
        content: { ...styles.content, ...contentStyle },
      }}
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
    >
      {children}
    </ReactModal>
  );
};

const styles: { [key: string]: CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 99999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    inset: 'auto auto auto auto',
    maxWidth: 'calc(100% - 32px)',
  },
};

export default Modal;
