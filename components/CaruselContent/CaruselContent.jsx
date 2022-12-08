import classes from "./CaruselContent.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import { data } from "./data";

const CaruselContent = () => {
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {data.mainSlider.map((item, index) => (
          <div key={index} className={classes.slider__item}>
            <div style={{ backgroundImage: `url(${item.img})` }} className={classes.slider__item__img}></div>
            {/* <div className={classes.slider__item__text}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default CaruselContent;
