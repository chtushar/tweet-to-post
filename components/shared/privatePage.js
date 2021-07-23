import { useRouter } from 'next/router';
import { StyledPage } from '../UI/common';
import { useAuth } from 'auth/useAuth';

const PrivatePage = ({ children, ...props }) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.replace('/');
  }
  return <StyledPage {...props}>{!!user && children}</StyledPage>;
};

export default PrivatePage;
