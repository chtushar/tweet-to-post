import { styled } from 'stitches';

const Button = styled('button', {
  padding: '$2',
  fontFamily: '$primary',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '$space$2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  variants: {
    twitter: {
      true: {
        borderRadius: '9999px',
        backgroundColor: '$twitterBlue',
        padding: '$2 $4',

        svg: {
          marginRight: '$3',
        },
      },
    },

    signOut: {
      true: {
        backgroundColor: '$red3',
        color: '$red10',
      },
    },
  },
});

export default Button;
