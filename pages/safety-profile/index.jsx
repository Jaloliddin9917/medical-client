import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classes from "../../styles/pages/Safety.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Composition from "../../public/media/images/composition.jpg"


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
                <Image src={Composition} height={450} width={1450} alt="logo" />
                <h1 className={classes.section1_title}>{t("Safety & Profile")}</h1>
                <button className={classes.section1_button}>{t("BIZ BILAN BOG'LANISH")}</button>
            </div>

            <div className={classes.section2}>
                <h3 className={classes.section2_title}>{t("Content")}</h3>
                <Link href="#">{t("0.0.1 NeuroAiD takes his origins in the traditional medicine. It is a natural product, made of 9 herbal ingredients.")}</Link>
                <Link href="#">{t("0.0.2 Scientists have conducted several studies on NeuroAiD and identified multiple properties involved in neurorepair mechanisms that are stimulated following a brain injury. While the role of each ingredient is not well defined, the synergistic effect of their combination appears to be an optimal answer to boost the recovery process.")}</Link>
                <Link href="#">{t("0.0.3 Manufacturing of NeuroAiD is standardized with strict quality control and compliance to Good Manufacturing Practice.")}</Link>
                <Link href="#">{t("1 Composition")}</Link>
                <Link href="#">{t("1.0.0.0.1 Each ingredient is selected for its properties and safety profile. Manufacturing of NeuroAiD is standardized with strict quality and Good Manufacturing Practice compliance.")}</Link>
                <Link href="#">{t("2 How to take NeuroAiD?")}</Link>
                <Link href="#">{t("2.0.1 Oral treatment in capsule form.")}</Link>
                <Link href="#">{t("2.0.2 2 capsules, 3 times daily.")}</Link>
                <Link href="#">{t("2.0.3 Recommended for a minimum of 3 months.")}</Link>
                <Link href="#">{t("2.0.4 Complying with the recommended dosage gives the highest chance to get the most benefits from NeuroAiD.")}</Link>
                <Link href="#">{t("2.1 Find-out if NeuroAiD is right for you.")}</Link>
                <Link href="#">{t("2.1.1 Leave your questions to our Customer Care team by clicking on the box below. Always seek advice from your physician.")}</Link>
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