import type { FC, ReactNode } from 'react';
import { Typography as MUITypography, Box, styled } from '@mui/material';
import { BaseHeaderMobile } from '@/components/molecules';

type Props = {
  children?: ReactNode;
  renderRight?: () => JSX.Element;
  renderLeft?: () => JSX.Element;
};

const TypographyHeader: FC<Props> = ({ children, renderLeft, renderRight }) => {
  return (
    <BaseHeaderMobile>
      <Inner>
        {renderLeft && <Ends>{renderLeft()}</Ends>}
        <span />
        <Typography>{children}</Typography>
        {renderRight && <Ends>{renderRight()}</Ends>}
      </Inner>
    </BaseHeaderMobile>
  );
};

const Typography = styled(MUITypography)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  fontWeight: 'bold',
  width: '100%',
}));

const Ends = styled('div')`
  position: relative;
  z-index: 100;
`;

const Inner = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

export default TypographyHeader;
