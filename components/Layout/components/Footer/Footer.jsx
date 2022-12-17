import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../../public/media/images/Logo.png";
import Location from "../../../../public/media/icons/location.svg";
import Message from "../../../../public/media/icons/message.svg";
import Phone from "../../../../public/media/icons/phone.svg";
import Telegram from "../../../../public/media/icons/Telegram.svg";
import Facebook from "../../../../public/media/icons/Facebook.svg";
import Instagram from "../../../../public/media/icons/Instagram.svg";

const Footer = () => {
  return (
    <>
    <footer className={classes.footer__container}>
      <div className={classes.footer}>
        <div className={classes["footer__item"]}>
          <Image src={Logo} width="300" height="100" alt="logo" />
          <div className={classes.footer__item__info}>
            <Image src={Location} width="20" height="20" alt="logo" />
            <p>
              <a href="">
                Association of Bariatric and Metabolic Surgeons of Uzbekistan
              </a>
            </p>
          </div>
          <div className={classes.footer__item__info}>
            <Image src={Message} width="20" height="20" alt="logo" />
            <p>
              <a href="mailto: oktyabrteshaev@gmail.com">
                oktyabrteshaev@gmail.com
              </a>
            </p>
          </div>
          <div className={classes.footer__item__info}>
            <Image src={Phone} width="20" height="20" alt="logo" />
            <p>
              <a href="tel: +998 90 358 13 41">+998 90 358 13 41</a>
            </p>
          </div>
        </div>
      </div>
      
    </footer>
      <div className={classes.footer__bottom}>
        MAHP1700492. This site is intended for audiences in Singapore only. Copyright © 2022.
        All Rights Reserved NeuroAiD™ by Moleac Pte Ltd.
      </div>
    </>
  );
};

export default Footer;
