import Home from "containers/Home";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function HomePage() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Head>
      <Home />
    </div>
  );
}
