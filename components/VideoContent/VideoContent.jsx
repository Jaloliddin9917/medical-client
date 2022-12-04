import React, { useEffect, useRef } from 'react';
import classes from "./VideoBox.module.scss";
import Link from "next/link";
import Image from "next/image";

import Video1 from "../../public/video/video1.mp4"


const VideoContent = () => {


    return (
        <video
            id="background-video"
            loop
            autoPlay
            muted
            style={{
                position: "relative",
                width: "100%",
                height: "15rem",
                left: 0,
                top: 0,
            }}
        >
            <source src={'https://moleac.com/v3/wp-content/uploads/2022/11/moleac-home-video-1-2-1-1.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoContent;
