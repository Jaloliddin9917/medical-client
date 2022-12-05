import React, { useEffect, useRef } from 'react';
import classes from "./VideoContent.module.scss";
import Link from "next/link";
import Image from "next/image";

// import Video1 from "../../public/video/video1.mp4"


const VideoContent = () => {


    return (
        <div className={classes.video_container}>

            <div className={classes.left}>
                <video
                    className={classes.video}
                    style={{ height: "100%", width: "100%" }}
                    src="https://moleac.com/v3/wp-content/uploads/2022/11/moleac-home-video-1-2-1-1.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>
            <div className={classes.right}>
                <Image src={"https://moleac.com/v3/wp-content/uploads/2022/11/moleac-logo-header-min-1.png"} alt="" width="300" height="200" />
                <h2 className={classes.video_title}>Bringing Innovative Solutions to Healthcare Practitioners.</h2>
                <button className={classes.video_button}>FIND OUT MORE</button>
            </div>
        </div>

    );
};

export default VideoContent;
 // <video
        //     id="background-video"
        //     loop
        //     autoPlay
        //     muted
        //     style={{
        //         position: "relative",
        //         width: "100%",
        //         height: "15rem",
        //         left: 0,
        //         top: 0,
        //     }}
        // >
        //     <source src={'https://moleac.com/v3/wp-content/uploads/2022/11/moleac-home-video-1-2-1-1.mp4'} type="video/mp4" />
        //     Your browser does not support the video tag.
        // </video>