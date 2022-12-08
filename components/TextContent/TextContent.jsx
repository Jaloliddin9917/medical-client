import classes from "./TextContent.module.scss";
import Link from "next/link";
import Image from "next/image";

const TextContent = () => {
  return (
    <div className={classes.textContainer}>
      <h1 className={classes.textContainer__title}>
        NeuroAiD™II helps support neurological functions and is recommended for
        patients undergoing rehabilitation program for improving motor and
        cognitive functions.
      </h1>
      <div className={classes.textContainer__main}>
        <div className={classes.main__left}>
          <span>NeuroAiD™II</span> was historically a Traditional Chinese Medicine and is
          listed in Singapore since 2006 as a Chinese Proprietary Medicine and
          is indicated to support neurological functions.
          <br /><br />
          <span>NeuroAiD™II</span> is
          manufactured following the international standards of Good
          Manufacturing Practices and has a well-established quality profile.
          Each batch of <span>NeuroAiD™II</span> is subjected to stringent quality control
          and ensuring the safety and quality of the product.
        </div>
        <div className={classes.main__right}>
          <Image
            src="https://neuroaid.com.sg/main/wp-content/uploads/neuroaidII_2-1-2048x1365.jpg"
            alt=""
            width="400"
            height="266"
          />
        </div>
      </div>
    </div>
  );
};

export default TextContent;
