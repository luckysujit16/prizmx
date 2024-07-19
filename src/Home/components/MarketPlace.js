import React from "react";
import mkt_place_img from "../assets/img/pzm_market_place.png";
import styles from "../home.module.css";

const MarketPlace = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-6 col-sm-12 col-xs-12 my-5 text-start">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-1">
                  <i class="bi bi-magic"></i>
                </div>
                <div className="col-11 fs-6 fw-bold text-start">
                  <span className={styles.introtext}>FUTURE PROSPECTS</span>
                </div>
              </div>
            </div>
            <h1 className={styles.title}>PRIZMX Market Place</h1>
            <div className="row">
              <p className={styles.featurebody}>
                Unlike any other crypto that came in existance PRIZMX's main
                purpose is to provide fast, economical, border less & safe
                independent payment solutions to global community.
              </p>
              <p className={styles.featurebody}>
                Having replenished the balance of the wallet with just 1 PRIZMX
                coin, you will start paramining- an automatic process of
                generating new coins..
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 text-center">
            <img
              src={mkt_place_img}
              alt="How Does Prizm Work"
              className={styles.banner_marketplace}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
