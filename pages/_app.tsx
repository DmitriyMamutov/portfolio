// import {useEffect, useCallback} from 'react';
import type { AppProps } from "next/app";
import "../static/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  // const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     resetWindowScrollPosition()
  //   }
  // }, [resetWindowScrollPosition])

  return <Component {...pageProps} />;
}
