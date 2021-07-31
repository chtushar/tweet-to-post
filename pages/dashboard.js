import { useEffect } from 'react';
import Head from 'next/head';
import { styled } from 'stitches';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth';
import { PrivatePage } from '../components/shared';

const H2 = styled('h2', {
  fontSize: '$8',
});

const Dashboard = () => {
  return (
    <PrivatePage>
      <Head>
        <title>Dashboard | Tweet to Post</title>
      </Head>
      <H2>Recent tweets</H2>
    </PrivatePage>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  return {
    props: {},
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Dashboard);
