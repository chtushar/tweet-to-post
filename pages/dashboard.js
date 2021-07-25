import Head from 'next/head';
import { styled } from 'stitches';
import { useAuth } from 'auth/useAuth';
import { useAxios } from '../context/Axios';
import { PrivatePage } from '../components/shared';

const H2 = styled('h2', {
  fontSize: '$8',
});

const Dashboard = () => {
  const { additionalUserInfo } = useAuth();
  const { twitterRequest } = useAxios();
  twitterRequest.getHomeTweets(additionalUserInfo.username);

  return (
    <PrivatePage>
      <Head>
        <title>Dashboard | Tweet to Post</title>
      </Head>
      <H2>Recent tweets</H2>
    </PrivatePage>
  );
};

export const getStaticProps = (context) => {
  return {
    props: {
      message: 'ok',
    },
  };
};

export default Dashboard;
