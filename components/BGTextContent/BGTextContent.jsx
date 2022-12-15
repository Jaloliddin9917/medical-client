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
      <dir className={classes.bgTextContainer_desc}>
        <div><i>&#10004;</i><span>{t("Oral formula in capsule form made of 9 natural herbal ingredients.")}</span></div>
        <div><i>&#10004;</i><span>{t("Recommended for patients in rehabilitation to support their program for improving daily functional independence.")}</span></div>
        <div><i>&#10004;</i><span>{t("Supports motor and cognitive functions to improve quality of life.")}</span></div>
        <div><i>&#10004;</i><span>{t("Scientifically researched.")}</span></div>
        <div><i>&#10004;</i><span>{t("Registered and sold in 35 countries worldwide.")}</span></div>
      </dir>
    </div>
  );
};

export default BGTextContent;
