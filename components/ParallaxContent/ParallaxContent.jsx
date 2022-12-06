import React, { useEffect, useRef } from 'react';
import classes from "./ParallaxContent.module.scss";
import Link from "next/link";
import Image from "next/image";



const VideoContent = () => {


    return (
        <div className={classes.parallax_container}>
            <div className={classes.img}>
                <Image className={classes.img_imgStyle} src={"https://moleac.com/v3/wp-content/uploads/2022/03/cropped-shot-of-doctor-examining-mri-scan-2021-08-29-19-37-09-utc-min-683x1024.jpg"} alt="" width="1350" height="260" />
            </div>
            <div className={classes.content}>
                
            </div>
        </div>

    );
};

export default VideoContent;
