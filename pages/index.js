import Head from 'next/head';
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth';
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
  const { signIn } = useAuth();

  return (
    <Page>
      <Head>
        <title>Tweet to Post</title>
      </Head>

      <Main>
        <h1>
          Turn your Tweets <br /> into shareable images
        </h1>
        <Button onClick={signIn} twitter>
          <TwitterLogo />
          Sign in with Twitter
        </Button>
      </Main>
    </Page>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Home);
