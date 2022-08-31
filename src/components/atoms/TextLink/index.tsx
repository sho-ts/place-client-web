import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

type Props = {
  href: string;
  target?: string;
  children?: ReactNode;
};

const TextLink: FC<Props> = ({ href, target, children }) => {
  if (target)
    return (
      <A href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </A>
    );
  return (
    <Link passHref href={href}>
      <A>{children}</A>
    </Link>
  );
};

const A = styled('a')`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export default TextLink;