import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "./404.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Page Not Found")}</title>
        <meta name="description" content="Association of Bariatric and Metabolic Surgeons of Uzbekistan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.img}>
        <Image src={"/media/images/404.svg"} layout="fill" alt="404" />
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const locale = context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default PageNotFound;
