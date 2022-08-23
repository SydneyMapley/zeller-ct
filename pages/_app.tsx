import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import NextProgress from "next-progress";
import Head from "next/head";
import globalStyles from "styles/global";
import { theme } from "@styles/stitches.config";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  globalStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NextProgress
        color={theme.colors.blue.value}
        height={2}
        options={{ showSpinner: false }}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
