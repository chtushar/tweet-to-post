import { useRouter } from 'next/router';
import { useAuthUser } from 'next-firebase-auth';
import { StyledPage, Nav, Avatar } from '../UI/common';
import Button from '../UI/Button';

const PrivatePage = ({ children, ...props }) => {
  const router = useRouter();
  const AuthUser = useAuthUser();

  return (
    <StyledPage {...props}>
      <Nav>
        <Avatar
          width='40px'
          height='40px'
          alt='displayImage'
          src={AuthUser.photoURL}
        />
        <Button onClick={AuthUser.signOut} signOut>
          Sign Out
        </Button>
      </Nav>
      {children}{' '}
    </StyledPage>
  );
};

export default PrivatePage;
