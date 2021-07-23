import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from '../stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
