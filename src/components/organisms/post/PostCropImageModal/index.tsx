import type { FC } from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Button } from '@/components/atoms';
import { Modal } from '@/components/molecules';
import Cropper from 'react-easy-crop';

type Props = {
  objectUrl: string;
  isOpen: boolean;
  handleRequestClose: () => void;
  showCroppedImage: () => void;
  onCropComplete: any;
};

const PostCropImageModal: FC<Props> = ({
  objectUrl,
  isOpen,
  handleRequestClose,
  showCroppedImage,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <Modal
      contentStyle={{
        padding: '20px 4px',
      }}
      isOpen={isOpen}
      handleRequestClose={handleRequestClose}
    >
      <div
        css={css`
          position: relative;
          width: 320px;
          height: 320px;
          background-color: #000;
          margin-bottom: 16px;
        `}
      >
        <Cropper
          image={objectUrl}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropSize={{
            width: 300,
            height: 300,
          }}
          onCropComplete={onCropComplete}
          onCropChange={setCrop}
          onZoomChange={setZoom}
        />
      </div>
      <Button variant='contained' position="center" onClick={showCroppedImage}>
        完了
      </Button>
    </Modal>
  );
};

export default PostCropImageModal;
