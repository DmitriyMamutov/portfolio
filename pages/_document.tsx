import { Head, Html, Main, NextScript } from "next/document";
import {WEBSITE_LOGO} from 'config/common';
const Document = () => {
  return (
    <Html lang='ua'>
      <Head>
        <link className='logo' rel="icon" href={WEBSITE_LOGO} />
        {/* <link
          rel="preload"
          href="/static/fonts/MontserratCyrillic/Montserrat-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        /> */}

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
