import Head from 'next/head';
import { styled } from 'stitches';
import { useAuth } from 'auth/useAuth';
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

export const getStaticProps = (context) => {
  return {
    props: {
      message: 'ok',
    },
  };
};

export default Dashboard;
