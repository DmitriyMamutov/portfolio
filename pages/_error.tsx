import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function IndexPage() {
  const { t } = useTranslation("error");

  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Head>
Error
    </>
  );
}
