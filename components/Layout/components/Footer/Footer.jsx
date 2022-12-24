import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../../public/media/icons/NeuroAiDFooter.png";
import { GoLocation } from 'react-icons/go';
import { CgMail } from 'react-icons/cg';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <footer className={classes.footer__container}>
        <div className={classes.footer}>
          <div className={classes["footer__item"]}>
            <Image src={Logo} width="300" height="100" alt="logo" />
            <div className={classes.footer__item__info}>
              {/* <Image style={{color: "red"}} src={Location} width="20" height="20" alt="logo" /> */}
              <GoLocation style={{width: "20px", height: "20px"}} className={classes.footer_icon} />
              <p>
                <a href="">
                  Manzil: Yakkasaroy tumani, Bobur ko‘chasi 22-uy
                </a>
              </p>
            </div>
            <div className={classes.footer__item__info}>
              <CgMail style={{ width: "20px", height: "20px" }} />
              <p>
                <a href="mailto: jakhongirmirjuraev@gmail.com">
                  jakhongirmirjuraev@gmail.com
                </a>
              </p>
            </div>
            <div className={classes.footer__item__info}>
              <FiPhoneCall style={{ width: "20px", height: "20px" }} />
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
