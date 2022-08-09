import type { AppPropsWithLayout } from '@/types/page';
import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </Fragment>
  );
}

export default MyApp;
