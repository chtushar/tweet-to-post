import Image from 'next/image';
import { styled } from 'stitches';

export const StyledPage = styled('div', {
  padding: '0 $10',
  minHeight: '100vh',
});

export const Nav = styled('nav', {
  padding: '$4 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$3',
});

export const Avatar = styled(Image, {
  borderRadius: '9999px',
});
