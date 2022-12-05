import React, { useEffect, useRef } from 'react';
import classes from "./AnimationContent.module.scss";
import Link from "next/link";
import Image from "next/image";

// import Video1 from "../../public/video/video1.mp4"


const VideoContent = () => {


    return (
        <div className={classes.anima_container}>
            <div className={classes.left}>
                <Image src={"https://moleac.com/v3/wp-content/uploads/2022/04/cropped-view-of-doctor-in-white-coat-holding-model-2022-02-07-09-13-11-utc-copy-min-scaled.jpg"} alt="" width="675" height="600" />
            </div>
            <div className={classes.right}>

            </div>
        </div>

    );
};

export default VideoContent;
