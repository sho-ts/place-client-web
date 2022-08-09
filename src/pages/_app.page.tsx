import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
