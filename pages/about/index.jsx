import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BGBlueContent from "../../components/BGBlueContent";
import TextContent from "../../components/About-page/AboutTextContent/TextContent";
import classes from "../../styles/pages/About.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["about"]}>
      <Head>
        <title>{t("Medicin market")}</title>
        <meta
          name="description"
          content="Association of Bariatric and Metabolic Surgeons of Uzbekistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes["about__container"]}>
   
   
        <TextContent/>
      </div>

      <div className={classes["about__container__footer"]}>
        <BGBlueContent />
      </div>
    </div>
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

export default About;
