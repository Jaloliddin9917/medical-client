import classes from "./ContactInfo.module.scss";
import { useTranslation } from "next-i18next";
import { FaTelegram, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import Phone from "../../../public/media/icons/phone.svg"

const ContactInfo = () => {
  const { t } = useTranslation();

  const optionInfo = [
    {
      icon: <BsTelephoneInboundFill className={classes.iconSvg}/>,
      text: "+998 33 335 03 03"
    },
    {
      icon: <FaTelegram className={classes.iconSvg} />,
      text: "telegram link"
    },
    {
      icon: <FaFacebookSquare className={classes.iconSvg} />,
      text: "Neuroaiduz"
    },
    {
      icon: <FaInstagramSquare className={classes.iconSvg} />,
      text: "Neuroaiduz"
    },
  ]

  return (
    <div className={classes.container__info}>
      {/* <h2>{t("Biz Bilan Bog'lanish")}</h2> */}

      <div className={classes.contact_icons}>

        {optionInfo.map((item, index) => (
          <div className={classes.contact_icon} key={index}>
            <div className={classes.contact_icon_square}>{item.icon}</div>
            <h2 className={classes.contact_icon_text}>{item.text}</h2>
          </div>
        ))}
       
      </div>
    </div>
  );
};
export default ContactInfo;
