import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../../public/media/images/Logo.png";
import Location from "../../../../public/media/icons/location.svg";
import Message from "../../../../public/media/icons/message.svg";
import Phone from "../../../../public/media/icons/phone.svg";

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
                  Manzil: Yakkasaroy tumani, Bobur ko‘chasi 22-uy
                </a>
              </p>
            </div>
            <div className={classes.footer__item__info}>
              <Image src={Message} width="20" height="20" alt="logo" />
              <p>
                <a href="mailto: jakhongirmirjuraev@gmail.com">
                  jakhongirmirjuraev@gmail.com
                </a>
              </p>
            </div>
            <div className={classes.footer__item__info}>
              <Image src={Phone} width="20" height="20" alt="logo" />
              <p>
                <a href="tel: +998 33 335 03 03">+998 33 335 03 03</a>
              </p>
            </div>
          </div>
        </div>

      </footer>
      {/* <div className={classes.footer__bottom}>
       
      </div> */}
    </>
  );
};

export default Footer;
