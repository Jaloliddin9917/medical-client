import React from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../../public/media/icons/NeuroAiDHeader.png";
import Menu from "../../../../public/media/icons/menu.svg";
import Rus from "../../../../public/media/icons/ru.svg";
import Uzb from "../../../../public/media/icons/uz.svg";
import data from "../links.json";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { t } from "i18next";



const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleChangeLocale = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <Link href="/about">{t("NeuroAiD™II Haqida")}</Link>,
      key: '1',
    },
    {
      label: <a href="/composition-dosage">{t("Tarkibi - Doza")}</a>,
      key: '2',
    },
    {
      label: <a href="/safety-profile">{t("Xavfsizlik profili")}</a>,
      key: '3',
    },
  ];


  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <Link href="/">
            <Image src={LogoWhite} alt="" width="200" height="100" />
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
              
              {link.comp === "aboutNeuroAiD" ?
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                  className={classes.dropdownLink}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ fontWeight: "500"}}>
                      NeuroAiD™II Haqida
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown> : null
              }
            </li>
          ))}
          <li className={classes.extraLink}
            onClick={() => {
              setOpen(open === false ? true : false);
            }}
          >
              <Link href={"/about"}>{t("NeuroAiD™II Haqida")}</Link>
              <Link href={"/composition-dosage"}>{t("Tarkibi - Doza")}</Link>
              <Link href={"/safety-profile"}>{t("Xavfsizlik profili")}</Link>
          </li>
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
            setOpen(open === false ? true : true);
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
