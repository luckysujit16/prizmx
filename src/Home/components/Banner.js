//src/Home/component/Banner.js

import React from "react";
import banner1 from "../assets/img/banner-04.png";
import styles from "../home.module.css";

const Banner = () => {
  return (
    <section className="styles.section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <img src={banner1} alt="banner-1" className={styles.banner} />
          </div>

          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className={styles.banner__content}>
              <h1 className={styles.banner__title}>Welcome to our shop</h1>
              <p className={styles.banner__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
