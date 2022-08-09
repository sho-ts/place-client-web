import type { FC } from 'react';
import type { ButtonProps } from '@mui/material/Button';
import { Button as MUIButton } from '@mui/material';
import { css } from '@emotion/react';

type ButtonPosition = 'left' | 'center' | 'right';

type Props = ButtonProps & {
  position?: ButtonPosition;
};

const Button: FC<Props> = (baseProps) => {
  const { position = 'left', ...props } = baseProps;

  return (
    <div css={styles.base(position)}>
      <MUIButton {...props} />
    </div>
  );
};

const styles = {
  base: (position: ButtonPosition) => css`
    display: flex;
    justify-content: ${position};
  `,
};

export default Button;
