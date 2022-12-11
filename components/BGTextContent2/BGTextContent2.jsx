import classes from "./BGTextContent2.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BGTextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.bgTextContainer2}>
      <div className={classes.bgTextContainer2_title}>
        {t("How to get ")}NeuroAiD™II?
      </div>
      <p><span>&#10004;</span>{t("You can order NeuroAiD™II directly online and get it delivered to your home in Singapore within 1-2 working days by calling +65 6211 3715")}</p>
      <p><span>&#10004;</span>{t("Alternatively, you may also purchase NeuroAiD™II from Physician Clinics and selected Guardian, Unity or Watson Pharmacies.")}</p>
      <p><span>&#10004;</span>{t("If you would like more information on NeuroAiD™II, please feel free to contact our Customer Service at +65 6211 3715 during office hours.")}</p>
    </div>
  );
};

export default BGTextContent;
