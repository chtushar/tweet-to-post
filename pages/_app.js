import { AuthProvider } from '../auth/useAuth';
import { global } from '@stitches/react';
import { normalize } from 'normalize-stitches';

const globalStyles = global({
  ...normalize,
});

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
