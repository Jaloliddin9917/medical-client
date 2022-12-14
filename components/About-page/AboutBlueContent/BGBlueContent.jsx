import classes from "./BGBlueContent.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const BGBlueContent = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.aboutBgBlueContainer}>
      <div className={classes.aboutBgBlueContainer_title}>
        Comply with the recommended dosage to gain maximum benefit from
        NeuroAiD™II
      </div>

      <div className={classes.aboutBgBlueContainer_desc}>
        NeuroAiD™II is made of 9 natural ingredients: Astragalus root (Radix
        astragali), Salvia Miltiorrhiza root (Radix Salviae miltiorrhizae),
        Chinese Peony root (Radix Paeonia rubra), rhizome of Lovage (Rhizoma
        chuanxiong), Chinese Angelica root (Radix Angelicae sinensis),
        Safflower(Carthamus tinctorius), Peach seed (Semen persicae), Thinleaf
        Milkwort root (Radix polygalae), Grassleaf Sweetflag rhizome (Rhizoma
        Acori tatarinowii)
      </div>
    </div>
  );
};

export default BGBlueContent;
