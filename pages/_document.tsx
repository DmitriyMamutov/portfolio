import { Head, Html, Main, NextScript } from "next/document";
import { WEBSITE_LOGO } from "config/common";
const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link className="logo" rel="icon" href={WEBSITE_LOGO} />
        <link
          rel="preload"
          href="/static/fonts/Hellix/Hellix-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/Hellix/Hellix-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/Hellix/Hellix-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
