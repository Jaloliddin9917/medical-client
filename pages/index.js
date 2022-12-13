import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import classes from "../styles/pages/Home.module.scss";
import CaruselContent from "../components/CaruselContent";
import TextContent from "../components/TextContent";
import BGTextContent from "../components/BGTextContent";
import ImgTextContent from "../components/ImgTextContent";
import BGTextContent2 from "../components/BGTextContent2";
import BGBlueContent from "../components/BGBlueContent";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={classes["home"]}>
      <Head>
        <title>{t("Medicin market")}</title>
        <meta
          name="description"
          content="Association of Bariatric and Metabolic Surgeons of Uzbekistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes["home__carusel"]}>
      <CaruselContent />
      </div>
      <div className={classes["home__mini-content"]}>
       
        <TextContent />
        <BGTextContent />
        <ImgTextContent />
        <BGTextContent2 />
  
      </div>
      <BGBlueContent />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const locale = context.locale;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
