//src/Home/component/Banner.js

import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/img/banner-04.png";
import styles from "../home.module.css";
import Usp from "./Usp";

const Banner = () => {
  return (
    <section className="styles.section">
      <Carousel>
        <Carousel.Item>
          <div className="container">
            <div className="row text-light">
              <div className="col-md-8 col-sm-12 col-xs-12 ">
                <img src={banner1} alt="banner-1" className={styles.banner} />
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={styles.content}>
                  <h1 className={styles.title}>Deal Crypto Peer To Peer</h1>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row text-light">
              <div className="col-md-8 col-sm-12 col-xs-12 ">
                <img src={banner1} alt="banner-1" className={styles.banner} />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={styles.content}>
                  <h1 className={styles.title}>Deal Crypto Peer To Peer</h1>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="col-md-12 col-sm-12 col-xs-1">
          <Usp />
        </div>
      </div>
    </section>
  );
};

export default Banner;
