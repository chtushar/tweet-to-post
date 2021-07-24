import { useRouter } from 'next/router';
import { StyledPage, Nav } from '../UI/common';
import Button from '../UI/Button';
import { useAuth } from 'auth/useAuth';

const PrivatePage = ({ children, ...props }) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.replace('/');
  }
  return (
    <StyledPage {...props}>
      {!!user && (
        <>
          <Nav>
            <Button signOut>Sign Out</Button>
          </Nav>
          {children}{' '}
        </>
      )}
    </StyledPage>
  );
};

export default PrivatePage;
