import Error from "containers/Error";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function ErrorPage() {
  const { t } = useTranslation("error");

  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <Error />
    </>
  );
}
