import { useRouter } from 'next/router';
import { StyledPage, Nav, Avatar } from '../UI/common';
import Button from '../UI/Button';
import { useAuth } from 'auth/useAuth';

const PrivatePage = ({ children, ...props }) => {
  const router = useRouter();
  const { user, signOut, additionalUserInfo } = useAuth();
  console.log(additionalUserInfo);
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
            <p>{additionalUserInfo.username}</p>
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
