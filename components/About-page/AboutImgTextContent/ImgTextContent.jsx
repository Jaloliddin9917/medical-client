import classes from "./ImgTextContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const ImgTextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.aboutImgTextContainer}>
      <div className={classes.aboutImgTextContainer_wrapper}>
      <h1 className={classes.aboutImgTextContainer_title}>
        {t("What are the neurological functions")}
      </h1>
      <div className={classes.aboutImgTextContainer_main}>
        <div className={classes.aboutImgTextContainer_main_left}>
          <Image src={"https://neuroaid.com.sg/main/wp-content/uploads/Left-side-What-happens-during-rehabilitation.jpg"} alt="" width="400" height="300" />
        </div>
        <div className={classes.aboutImgTextContainer_main_right}>
          {t("The NEUROLOGICAL FUNCTIONS correspond to motor and cognitive functions mediated by the brain and nerves.")}
          <br /><br />
          {t("These functions are essential for daily activities such as moving, thinking, speaking and interacting socially.")}
          <br /><br />
          {t("Depending on the conditions of nerves and brain, rehabilitation is essential to regain and improve abilities.")}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ImgTextContent;
