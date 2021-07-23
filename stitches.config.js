import { createCss } from '@stitches/react';
import { gray } from '@radix-ui/colors';

export const { styled, css, getCssString } = createCss({
  theme: {
    colors: {
      ...gray,
      twitterBlue: '#1DA1F2',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '20px',
      4: '24px',
      5: '28px',
      6: '32px',
    },
    fonts: {
      primary: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    },
    media: {
      bp1: '(max-width: 1024px)',
      bp2: '(max-width: 768px)',
      bp3: '(max-width: 540px)',
    },
  },
});
