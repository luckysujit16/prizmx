import React from "react";
import styles from "../home.module.css";
import { Carousel } from "react-bootstrap";
import ad1 from "../assets/img/news/ad1.jpg";
import ad2 from "../assets/img/news/ad2.jpg";
import ad3 from "../assets/img/news/ad3.jpg";
import ad4 from "../assets/img/news/ad4.jpg";
import ad5 from "../assets/img/news/ad5.jpg";
import ad6 from "../assets/img/news/ad6.jpg";
import ad7 from "../assets/img/news/ad7.jpg";
import ad8 from "../assets/img/news/ad8.jpg";
import ad9 from "../assets/img/news/ad9.jpg";
import adx from "../assets/img/news/adx.jpg";
import "./Carousel.module.css";

const PressNMedia = () => {
  return (
    <div className={styles.PressNMedia}>
      <div className="container-fluid">
        <div className="row px-5">
          <div className={styles.title}>PRIZMX PRESS & MEDIA</div>
        </div>
        <div className="row px-5">
          <Carousel>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad1} alt="Media Articles" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad2} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad3} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad4} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad5} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad6} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad7} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad8} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={ad9} alt="Media Articles" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={styles.carousel}>
                <img src={adx} alt="Media Articles" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PressNMedia;
