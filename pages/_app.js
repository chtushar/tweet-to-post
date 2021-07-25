import { AuthProvider } from '../auth/useAuth';
import { AxiosProvider } from '../context/Axios';
import { global } from '@stitches/react';
import { normalize } from 'normalize-stitches';

const globalStyles = global({
  ...normalize,
  html: {
    fontFamily: '$primary',
    minHeight: '100vh',
    height: '100%',
  },
  body: {
    minHeight: '100%',
    margin: '0',
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <AuthProvider>
      <AxiosProvider>
        <Component {...pageProps} />
      </AxiosProvider>
    </AuthProvider>
  );
}

export default MyApp;
