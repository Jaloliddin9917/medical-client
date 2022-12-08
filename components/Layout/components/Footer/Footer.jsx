import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../../public/media/images/Logo.png";
import Location from "../../../../public/media/icons/location.svg";
import Message from "../../../../public/media/icons/message.svg";
import Phone from "../../../../public/media/icons/phone.svg";
import YouTube from "../../../../public/media/icons/Youtube.svg";
import Telegram from "../../../../public/media/icons/Telegram.svg";
import Facebook from "../../../../public/media/icons/Facebook.svg";
import TikTok from "../../../../public/media/icons/TikTok.svg";
import Instagram from "../../../../public/media/icons/Instagram.svg";
import LinkedIn from "../../../../public/media/icons/LinkedIn.svg";
import Twitters from "../../../../public/media/icons/Twitters.svg";
import data from "../links.json";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
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
        <FooterInfo
          className={classes["footer__item"]}
          title="about"
          links={data["about-info"]}
        />
        <FooterInfo
          className={classes["footer__item"]}
          title="Surgery"
          links={data["admission-info"]}
        />
        <FooterInfo
          className={classes["footer__item"]}
          title="information"
          links={data["information-info"]}
        />
      </div>
      <div className={classes.footer__bottom}>
        <a href="#">
          <Image src={Facebook} width="100%" alt="facebook" />
        </a>
        <a href="#">
          <Image src={Twitters} width="100%" alt="telegram" />
        </a>
        <a href="#">
          <Image src={LinkedIn} width="100%" alt="telegram" />
        </a>
        <a href="#">
          <Image src={Instagram} width="100%" alt="telegram" />
        </a>
        <a href="#">
          <Image src={TikTok} width="100%" alt="telegram" />
        </a>
        <a href="#">
          <Image src={Telegram} width="100%" alt="telegram" />
        </a>
        <a href="#">
          <Image src={YouTube} width="100%" alt="telegram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
