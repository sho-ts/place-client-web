import type { AppPropsWithLayout } from '@/types/page';
import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from '@/providers';
import 'destyle.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <CssBaseline />
      <RecoilRoot>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
