import Home from "containers/Home";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function HomePage() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta
          name="description"
          content={t("metaDescription")}
        />
        {/* <meta property="og:url" content={`${Environment.BASE_URL}${pageUrl}`} />
        <meta
          name="twitter:url"
          content={`${Environment.BASE_URL}${pageUrl}`}
        />
        <link rel="canonical" href={`${Environment.BASE_URL}${pageUrl}`} /> */}
      </Head>

      <Home />
    </div>
  );
}
