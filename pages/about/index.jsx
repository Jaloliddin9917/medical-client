import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    const { t } = useTranslation();
    return (
        <div>{t("lorem ")}</div>
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