import classes from "./CaruselContent.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Link from "next/link";
import SliderCard from "./SliderCard/SliderCard";
import facedata from "./data"

const CaruselContent = () => {
    const data = facedata
    return (
        <div className={classes.slider}>
            <Slider {...settings}>
                {data.map((slide, idx) => (
                    <SliderCard
                        className={classes.slider__item}
                        key={idx}
                        slide={slide}
                    />
                ))}
            </Slider>
        </div>
    );
};

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default CaruselContent;