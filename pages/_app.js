import { AuthProvider } from '../auth/useAuth';
import { global } from '@stitches/react';
import { normalize } from 'normalize-stitches';
import initAuth from '../utils/initAuth'; // the module you created above

initAuth();

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
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
