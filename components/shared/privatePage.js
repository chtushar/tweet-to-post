import { useRouter } from 'next/router';
import { StyledPage, Nav, Avatar } from '../UI/common';
import Button from '../UI/Button';
import { useAuth } from 'auth/useAuth';

const PrivatePage = ({ children, ...props }) => {
  const router = useRouter();
  const { user, signOut, additionalUserInfo, credential } = useAuth();
  console.log(credential);
  if (!user) {
    router.replace('/');
  }
  return (
    <StyledPage {...props}>
      {!!user && (
        <>
          <Nav>
            <Avatar
              width='40px'
              height='40px'
              alt='displayImage'
              src={user.photoURL}
            />
            {!!additionalUserInfo && <p>{additionalUserInfo.username}</p>}
            <Button onClick={signOut} signOut>
              Sign Out
            </Button>
          </Nav>
          {children}{' '}
        </>
      )}
    </StyledPage>
  );
};

export default PrivatePage;
