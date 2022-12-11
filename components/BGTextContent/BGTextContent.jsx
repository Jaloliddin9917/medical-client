import classes from "./BGTextContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BGTextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.bgTextContainer}>
      <div className={classes.bgTextContainer_title}>
        {t("Key facts on")} NeuroAiD™II
      </div>
      <p><span>&#10004;</span>{t("Recommended for patients in rehabilitation to support their program for improving daily functional independence.")}</p>
      <p><span>&#10004;</span>{t("Supports motor and cognitive functions to improve quality of life.")}</p>
      <p><span>&#10004;</span>{t("Scientifically researched.")}</p>
      <p><span>&#10004;</span>{t("Registered and sold in 35 countries worldwide.")}</p>
    </div>
  );
};

export default BGTextContent;
