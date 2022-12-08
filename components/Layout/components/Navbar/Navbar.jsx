import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../../public/media/images/Logo.png";
import Menu from "../../../../public/media/icons/menu.svg";
import Eng from "../../../../public/media/icons/eng.svg";
import Rus from "../../../../public/media/icons/ru.svg";
import Uzb from "../../../../public/media/icons/uz.svg";
import data from "../links.json";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleChangeLocale = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src={LogoWhite} alt="" width="193" height="66" />
          </Link>
        </div>
        <input id={classes["menu"]} type="checkbox" checked={open} />

        <ul>
          {data.navbar.map((link, idx) => (
            <li
              style={{
                border:
                  router.pathname === link.href
                    ? "1px solid #aec5ce"
                    : "1px solid transparent",
              }}
              onClick={() => {
                setOpen(open === false ? true : false);
              }}
              key={idx}
            >
              <Link href={link.href}>{t(`${link.title}`)}</Link>
            </li>
          ))}
          <li
            onClick={() => {
              setOpen(open === false ? true : false);
            }}
          >
            <div className={classes.icons}>
              <Image
                onClick={() => handleChangeLocale("uz")}
                width="100%"
                height="100%"
                src={Uzb}
                alt="uzb"
              />
            </div>
            <div className={classes.icons}>
              <Image
                onClick={() => handleChangeLocale("en")}
                width="100%"
                height="100%"
                src={Eng}
                alt="eng"
              />
            </div>
            <div className={classes.icons}>
              <Image
                onClick={() => handleChangeLocale("ru")}
                width="100%"
                height="100%"
                src={Rus}
                alt="rus"
              />
            </div>
          </li>
        </ul>

        <label
          onClick={() => {
            setOpen(open === false ? true : false);
          }}
          htmlFor={classes["menu"]}
          className={classes.mobBar}
        >
          <Image width="100%" height="100%" src={Menu} alt="menu" />
        </label>

        <label
          onClick={() => {
            setOpen(open === false ? true : false);
          }}
          style={{ display: open ? "block" : "none" }}
          className={classes.cover}
        ></label>
      </nav>
    </header>
  );
};

export default Navbar;
