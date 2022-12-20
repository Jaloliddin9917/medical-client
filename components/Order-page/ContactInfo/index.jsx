import classes from "./ContactInfo.module.scss";
import { useTranslation } from "next-i18next";

const ContactInfo = () => {
    const { t } = useTranslation();
  return (
    <div className={classes.container__info}>
      <h2>{t("Biz Bilan Bog'lanish")}</h2>
    </div>
  );
};
export default ContactInfo;
