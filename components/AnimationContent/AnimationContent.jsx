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
                <div className={classes.circle_yellow}></div>
                <Image className={classes.human} src={"https://moleac.com/v3/wp-content/uploads/2022/04/human-1024x1024-min.png"} alt="" width="561" height="561" />
            </div>
            <div className={classes.right}>
                <h1 className={classes.right_title}>A FOCUS ON NEUROLOGY</h1>
                <p className={classes.right_desc}>Since Moleac was founded, our ambition is to provide new solutions to supplement the therapeutic armamentarium for conditions where significant unmet needs remain. To achieve this goal, we develop natural products according to international standards and commercialize our products worldwide. </p>
                <h2 className={classes.right_descBlue}>Our products are developed by Moleac with scientific excellence and evidence-based approach.</h2>
                <p className={classes.right_descBottom}>Together with our R&D department and world renowned experts, we have successfully developed and marketed NeuroAiD, the world’s first post-stroke recovery treatment, helping patients to regain functional independence after a stroke or a traumatic brain injury by amplifying endogenous processes of brain repair. NeuroAiD is available in over 30 countries worldwide. </p>
            </div>
        </div>

    );
};

export default VideoContent;
