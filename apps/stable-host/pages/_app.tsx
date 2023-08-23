import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import materialTheme from '../configs/theme-configs';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stable Micro Frontend</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={materialTheme}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
