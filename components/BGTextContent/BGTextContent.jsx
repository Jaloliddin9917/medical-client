import classes from "./BGTextContent.module.scss";
import Link from "next/link";
import Image from "next/image";

const BGTextContent = () => {
  return (
    <div className={classes.bgTextContainer}>
      <div className={classes.bgTextContainer_title}>
        Key facts on NeuroAiD™II
      </div>
      <p><span>&#10003;</span>Recommended for patients in rehabilitation to support their program for improving daily functional independence.</p>
      <p><span>&#10003;</span>Supports motor and cognitive functions to improve quality of life.</p>
      <p><span>&#10003;</span>Scientifically researched.</p>
      <p><span>&#10003;</span>Registered and sold in 35 countries worldwide.</p>
    </div>
  );
};

export default BGTextContent;
