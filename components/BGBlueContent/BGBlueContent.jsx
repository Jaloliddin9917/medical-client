import classes from "./BGBlueContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BGBlueContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.bgBlueContainer}>
     
      <ul className={classes.bgBlueContainer_desc}>
        <li> <span>&#9679;</span> {t("Please seek professional advice from your physician or your leading pharmacy.")}</li>
        <li><span>&#9679;</span>{t("You could also leave your questions by clicking on the box below.")}</li>
        <button className={classes.bgBlueContainer_button}>{t("ASK YOUR QUESTIONS")}</button>
      </ul>
     
    </div>
  );
};

export default BGBlueContent;
