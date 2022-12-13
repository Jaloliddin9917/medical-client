import classes from "./TextContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const TextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.textContainer}>
      <h1 className={classes.textContainer__title}>
        {t("How to take NeuroAiD™II?")}
      </h1>
      <div className={classes.textContainer__main}>
        <div className={classes.main__left}>
          <ul>
            <li>Oral treatment in capsule form</li>
            <li>2 capsules, 3 times daily</li>
            <li>Content can also be diluted in water</li>
            <li>Recommended course duration: 3 months renewable</li>
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
