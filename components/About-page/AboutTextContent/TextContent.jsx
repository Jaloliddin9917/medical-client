import classes from "./TextContent.module.scss";
import { useTranslation } from "next-i18next";
import { FaCircle } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const TextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.aboutTextContainer}>
      <h1 className={classes.aboutTextContainer__title}>
        {t("How to take NeuroAiD™II?")}
      </h1>
      <div className={classes.aboutTextContainer__main}>
        <div className={classes.main__left}>
          <ul>
            <FaCircle className={classes.main__left_icon} /><li>{t("Oral treatment in capsule form")}</li>
            <FaCircle className={classes.main__left_icon} /><li>{t("2 capsules, 3 times daily")}</li>
            <FaCircle className={classes.main__left_icon} /><li>{t("Content can also be diluted in water")}</li>
            <FaCircle className={classes.main__left_icon} /><li>{t("Recommended course duration: 3 months renewable")}</li>
          </ul>
        </div>
        <div className={classes.main__right}>
          <Image
            src="https://neuroaid.com.sg/main/wp-content/uploads/neuroaidII_2-1-2048x1365.jpg"
            alt=""
            width="400"
            height="266"
          />
        </div>
      </div>
    </div>
  );
};

export default TextContent;
