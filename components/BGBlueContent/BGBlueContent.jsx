import classes from "./BGBlueContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BGBlueContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.bgBlueContainer}>
      {/* <div className={classes.bgBlueContainer_text}>
        {t("Find out if NeuroAiD™II is right for you:")}
      </div> */}
      <ul className={classes.bgBlueContainer_desc}>
        <li>{t("Please seek professional advice from your physician or your leading pharmacy.")}</li>
        <br />
        <li>{t("You could also leave your questions by clicking on the box below.")}</li>
      </ul>
      <div className={classes.bgBlueContainer_btWrapper}>
        <Link href="/order">
          <button className={classes.bgBlueContainer_button}>{t("ASK YOUR QUESTIONS")}</button>
        </Link>
      </div>
    </div>
  );
};

export default BGBlueContent;
