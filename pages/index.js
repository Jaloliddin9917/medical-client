import Head from "next/head";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import classes from "../styles/pages/Home.module.scss";
import MiniContent from "../components/Mini-Content";
import VideoContent from "../components/VideoContent";


export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={classes["home"]}>
      <Head>
        <title>{t("Bariatric Surgery")}</title>
        <meta name="description" content="Association of Bariatric and Metabolic Surgeons of Uzbekistan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes["home__partners"]}>
          <MiniContent/>
      </div>

      <VideoContent/>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const locale = context.locale;

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// };
