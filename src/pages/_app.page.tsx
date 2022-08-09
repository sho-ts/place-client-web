import type { AppPropsWithLayout } from '@/types/page';
import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <CssBaseline />
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
