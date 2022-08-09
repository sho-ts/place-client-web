import type { AppProps } from 'next/app';

import 'the-new-css-reset';
import styles from '@/styles/global.style';

import { Fragment } from 'react';
import { Global } from '@emotion/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Global styles={styles} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
