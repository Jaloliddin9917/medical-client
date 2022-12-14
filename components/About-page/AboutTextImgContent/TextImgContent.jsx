import classes from "./TextImgContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const TextImgContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.aboutTextImgContainer}>
      <div className={classes.aboutTextImgContainer_wrapper}>
        <h1 className={classes.aboutTextImgContainer_title}>
          {t("NeuroAiD™II scientifically researched")}
        </h1>
        <div className={classes.aboutTextImgContainer_main}>
          <div className={classes.aboutTextImgContainer_main_left}>
            {t("The NEUROLOGICAL FUNCTIONS correspond to motor and cognitive functions mediated by the brain and nerves.")}
            <br /><br />
            {t("These functions are essential for daily activities such as moving, thinking, speaking and interacting socially.")}
            <br /><br />
            {t("Depending on the conditions of nerves and brain, rehabilitation is essential to regain and improve abilities.")}
          </div>
          <div className={classes.aboutTextImgContainer_main_right}>
            <Image src={"https://neuroaid.com.sg/main/wp-content/uploads/2015/06/clinical-trials-1-e1509508390889.png"} alt="" width="195" height="400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImgContent;
