import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/assets/styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
