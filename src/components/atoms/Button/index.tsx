import type { FC } from 'react';
import type { ButtonProps } from '@mui/material/Button';
import type { SxProps } from '@mui/system/styleFunctionSx';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { css } from '@emotion/react';

type ButtonPosition = 'left' | 'center' | 'right';

type Props = ButtonProps & {
  position?: ButtonPosition;
  href?: string;
  sx?: SxProps;
};

const Button: FC<Props> = (baseProps) => {
  const { position = 'flex-start', href, sx, ...props } = baseProps;

  return (
    <Base
      sx={{
        ...sx,
        justifyContent: position,
      }}
    >
      {href ? (
        <Link passHref href={href}>
          <a css={styles.link}>
            <MUIButton {...props} />
          </a>
        </Link>
      ) : (
        <MUIButton {...props} />
      )}
    </Base>
  );
};

const Base = styled('div')`
  display: flex;
`;

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
