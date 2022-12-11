import classes from "./ImgTextContent.module.scss";
import { useTranslation } from "next-i18next";
import human from "../../public/media/images/neuron-body-1.png"
import Link from "next/link";
import Image from "next/image";

const ImgTextContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.imgTextContainer}>
      <h1 className={classes.imgTextContainer_title}>
        {t("What are the neurological functions")}
      </h1>
      <div className={classes.imgTextContainer_main}>
        <div className={classes.imgTextContainer_main_left}>
          <Image src={human} alt="" width="250" height="333" />
        </div>
        <div className={classes.imgTextContainer_main_right}>
          {t("The NEUROLOGICAL FUNCTIONS correspond to motor and cognitive functions mediated by the brain and nerves.")}
          <br /><br />
          {t("These functions are essential for daily activities such as moving, thinking, speaking and interacting socially.")}
          <br /><br />
          {t("Depending on the conditions of nerves and brain, rehabilitation is essential to regain and improve abilities.")}
        </div>
      </div>
    </div>
  );
};

export default ImgTextContent;
