import type { FC } from 'react';
import type { ButtonProps } from '@mui/material/Button';
import { Button as MUIButton } from '@mui/material';
import Link from 'next/link';
import { css } from '@emotion/react';

type ButtonPosition = 'left' | 'center' | 'right';

type Props = ButtonProps & {
  position?: ButtonPosition;
  href?: string;
};

const Button: FC<Props> = (baseProps) => {
  const { position = 'left', href, ...props } = baseProps;

  return (
    <div css={styles.base(position)}>
      {href ? (
        <Link passHref href={href}>
          <a css={styles.link}>
            <MUIButton {...props} />
          </a>
        </Link>
      ) : (
        <MUIButton {...props} />
      )}
    </div>
  );
};

const styles = {
  base: (position: ButtonPosition) => css`
    display: flex;
    justify-content: ${position};
  `,
  link: css`
    text-decoration: none;
  `,
};

export default Button;
