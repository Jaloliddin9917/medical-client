import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Image from "next/image";

const Order = () => {
    const { t } = useTranslation();
    return (
        <div>{t("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aliquam velit, dolorem ut optio fugit eum? Incidunt accusantium neque eaque adipisci dolore illum et autem, fugiat provident nisi officiis perferendis.")}</div>
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

export default Order;