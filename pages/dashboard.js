import Head from 'next/head';
import { PrivatePage } from '../components/shared';

const Dashboard = () => {
  return (
    <PrivatePage>
      <Head>
        <title>Dashboard | Tweet to Post</title>
      </Head>
      Dashboard
    </PrivatePage>
  );
};

export default Dashboard;
