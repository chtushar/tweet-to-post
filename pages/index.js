import Head from 'next/head';
import { useRouter } from 'next/router';
import { Page } from '../components/shared';
import { useAuth } from '../auth/useAuth';
import TwitterLogo from 'components/svg/TwitterLogo';
import Button from 'components/UI/Button';

import { styled } from 'stitches';

const Main = styled('main', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '$10',
    textAlign: 'center',
  },
});

const Home = () => {
  const router = useRouter();
  const { signIn, signOut, user } = useAuth();

  if (!!user) {
    router.push('/dashboard');
  }

  return (
    <Page>
      <Head>
        <title>Tweet to Post</title>
      </Head>

      <Main>
        {!user && (
          <>
            <h1>
              Turn your Tweets <br /> into shareable images
            </h1>
            <Button onClick={signIn} twitter>
              <TwitterLogo />
              Sign in with Twitter
            </Button>
          </>
        )}
      </Main>
    </Page>
  );
};

export default Home;
