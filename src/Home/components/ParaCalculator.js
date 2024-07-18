import React from "react";
import styles from "../home.module.css";

const ParaCalculator = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-xs-12"></div>
        <div className="col-lg-6 col-sm-12 col-xs-12 my-5 text-start">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-1">
                <i class="bi bi-magic"></i>
              </div>
              <div className="col-11">
                <span className={styles.prospects}>PRIZMX TOOLS</span>
              </div>
            </div>
          </div>
          <h1 className={styles.HowDoes}>Prizmx PARAMINING Calculator</h1>
          <div className="row">
            <p className={styles.featurebody}>
              Prizmx Pramining is parameter based logical implementation to
              bring new coins in circulation.
            </p>
            <p className={styles.featurebody}>
              Self wallet balance, network balance and paratax based difficulty
              level decides how much coins you mine. This calculator calculates
              accurate number of coins mined based on own balance, team balance
              and duration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaCalculator;
