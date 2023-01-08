import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "../../styles/pages/Safety.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Safity from "../../public/media/images/safity.jpg"


const About = () => {
    const { t } = useTranslation();
    return (
        <div className={classes["about"]}>
            <Head>
                <title>{t("Medicin market")}</title>
                <meta
                    name="description"
                    content="Uzbekistan"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={classes.section1} style={{ paddingTop: "100px" }}>
                <div className={classes.section1_imgSafity} />
                <h1 className={classes.section1_title}>{t("Safety & Profile")}</h1>
                <button className={classes.section1_button}>{t("BIZ BILAN BOG'LANISH")}</button>
            </div>

            <div className={classes.section2}>
                <h3 className={classes.section2_title}>{t("Content")}</h3>
                <Link href="#">{t("1 NeuroAiD is safe and well tolerated.")}</Link>
                <Link href="#">{t("1.0.1 The safety profile of NeuroAiD is now well established. All clinical studies have reported NeuroAiD as a safe product, without severe adverse events and with only rare and transitory gastro-intestinal discomfort (e.g., nausea, vomiting) in subjects with sensitive digestive transit.")}</Link>
                <Link href="#">{t("1.0.2 NeuroAiD has no impact on hepatic and renal functions, cardiovascular parameters, and other biological parameters1,2")}</Link>
                <Link href="#">{t("1.0.3 NeuroAiD is not competing nor interacting with other medications. It can be safely combined to usual post-stroke medications or post-traumatic brain injury medications, and can also be added to other therapeutic products1,3.")}</Link>
                <Link href="#">{t("1.0.4 No increase in the rates of delayed adverse events have been reported up to 2 years following a 3-month course with NeuroAiD4,5.")}</Link>
                <Link href="#">{t("1.1 Always seek advice from your physician.")}</Link>
                <Link href="#">{t("1.1.1 References")}</Link>
                <Link href="#">{t("1.2 Find-out if NeuroAiD is right for you.")}</Link>
                <Link href="#">{t("1.2.1 Leave your questions to our Customer Care team by clicking on the box below. Always seek advice from your physician.")}</Link>
            </div>

            <div className={classes.section3}>
                <h1 className={classes.section3_title}>{t("NeuroAiD is safe and well tolerated.")}</h1>
                <div className={classes.section3_content}>
                    <div className={classes.section3_content_img}></div>
                    <div className={classes.section3_content_text}>
                        {t("The safety profile of NeuroAiD is now well established. All clinical studies have reported NeuroAiD as a safe product, without severe adverse events and with only rare and transitory gastro-intestinal discomfort (e.g., nausea, vomiting) in subjects with sensitive digestive transit. ")}
                        <br />
                        <br />
                        {t(" NeuroAiD has no impact on hepatic and renal functions, cardiovascular parameters, and other biological parameters1, 2 NeuroAiD is not competing nor interacting with other medications. It can be safely combined to usual post-stroke medications or post-traumatic brain injury medications, and can also be added to other therapeutic products1,3. No increase in the rates of delayed adverse events have been reported up to 2 years following a 3-month course with NeuroAiD4,5.")}
                        <h3>{t("Always seek advice from your physician.")}</h3>
                    </div>
                </div>
            </div>

            <div className={classes.section4}>
                <h3 className={classes.section4_title}>{t("References")}</h3>
                <div className={classes.section4_text1}>
                    <p>1.{t("Young S va boshqalar. O'tkir ishemik insult bilan og'rigan bemorlarda MLC601 (NeuroAiD) ning xavfsizlik profili: insultni tiklash bo'yicha Xitoy tibbiyotining NeuroAiD samaradorligi bo'yicha Singapur tadqiqoti. Miya qon tomir kasalliklari. 2010;30:1-6.")}</p>
                    <p>2.{t("Gan R va boshqalar. Danqi Piantan Jiaonang normal sub'ektlar va insultli bemorlarda gemostaz, gematologiya va biokimyoni o'zgartirmaydi. Miya qon tomir kasalliklari. 2008;25:450-456.")}</p>
                    <p>3.{t("Chen C va boshqalar. Xitoy tibbiyotining NeuroAiD insultni tiklash bo'yicha samaradorligi: ikki marta ko'r, platsebo-nazorat qilinadigan, randomizatsiyalangan tadqiqot. Qon tomir. 2013a;44:2093-2100")}</p>
                    <p>4.{t("Venketasubramanian N va boshqalar. Xitoy tibbiyoti NeuroAiD insultni tiklash bo'yicha samaradorligi - Kengaytma tadqiqoti (CHIMES-E): Uzoq muddatli samaradorlikning ko'p markazli tadqiqoti. Miya qon tomir kasalliklari. 2015;39:309-318.")}</p>
                    <p>5.{t("Shahripour RB va boshqalar. O'tkir ishemik insult bilan og'rigan kavkazlik bemorlarda NeuroAiD ning uzoq muddatli xavfsizligini baholash uchun tasodifiy sinov. Chin J Integr Med. 2014;20(11): 812-817.")}</p>
                </div>
            </div>

        </div>
    );
};

export const getStaticProps = async (context) => {
    const locale = context.locale;

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
             fallback: false
        },
    };
};

export default About;