import React from "react";
import classes from "./miniBox.module.scss";
import Link from "next/link";
import Image from "next/image";




const Navbar = () => {

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <Image src={"https://moleac.com/v3/wp-content/uploads/2022/10/Cognivaid-stacked-boxes-2-min.png"} alt="" width="500" height="400" />
            </div>
            <div className={classes.right}>
                <h1 className={classes.title}>NEW PRODUCT: COGNIVAID™</h1>
                <p className={classes.desc}>Moleac has just launched a new product, CognivAiD™,  in Singapore!</p>
                <button className={classes.button}>
                    VISIT COGNIVAID.COM FOR MORE INFORMATION
                </button>
            </div>
        </div>
    );
};

export default Navbar;
