// src/components/Carousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.css";
import img1 from "../assets/img/slider.png";
import img2 from "../assets/img/slider.png";
import img3 from "../assets/img/slider.png";

const CustomCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
