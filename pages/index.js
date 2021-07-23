import Head from 'next/head';
import Image from 'next/image';
import { Page } from '../components/shared';
import { useAuth } from '../auth/useAuth';

const Home = () => {
  const { signIn, signOut, user } = useAuth();

  return (
    <Page>
      <Head>
        <title>Tweet to Post</title>
        <meta
          name='description'
          content='Convert your tweet to instagram posts'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {!user && <button onClick={signIn}>Sign in with Twitter</button>}
        {!!user && `Signed-in with ${user.email}`}
        {!!user && <button onClick={signOut}>Sign out</button>}
      </main>
    </Page>
  );
};

export default Home;
