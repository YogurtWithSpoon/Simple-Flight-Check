import React from "react";
import { selectPic } from "./sliderSlicer";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styles from "./Slider.module.css";

function CustomSlider() {
  const images = useSelector(selectPic);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {images.map((item, index) => {
          return (
            <div className={styles.slider_item} key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CustomSlider;
