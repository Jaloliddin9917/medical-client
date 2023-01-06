import classes from "./CaruselContent.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import { data } from "./data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

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
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />

};


export default CaruselContent;
