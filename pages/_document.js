import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from '../stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='Convert your tweet to instagram posts'
          />
          <link rel='icon' href='/favicon.ico' />

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
