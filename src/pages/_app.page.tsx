import type { AppPropsWithLayout } from '@/types/page';
import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from '@/providers';
import NextNprogress from 'nextjs-progressbar';
import 'destyle.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <CssBaseline />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <RecoilRoot>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </RecoilRoot>
    </Fragment>
  );
}

export default MyApp;
