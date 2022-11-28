import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang='ua'>
      <Head>
        {/* <link rel="icon" href={TAB_ICON} /> */}
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
