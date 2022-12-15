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
            {t("Pharmacology and pre-clinical studies (made on cells cultures and animal models) have been conducted to identify the mechanisms of action of NeuroAiD™II, confirming the multimodal approach of the product.")}
            <br /><br />
            {t("Research has been conducted with involvement of international experts. Findings have been published in specialized journals and released in international conferences over the years.")}
            <br /><br />
            {t("Over 45 scientific papers have been published and the research remains very active with ongoing trials to further assess the properties of NeuroAiD’s family products.")}
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
