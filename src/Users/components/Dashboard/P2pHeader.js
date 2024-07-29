import React from "react";
import styles from "../../../Users/assets/css/p2p.module.css";

const P2pHeader = () => {
  return (
    <div className="container-fluid">
      <div className="row px-4 pb-3">
        <div className={styles.p2pHeader}>
          <div className={styles.p2pTitle}>P2P Order Book</div>
          <div className={styles.p2pCurrency}>
            {/* Example single danger button */}
            <div class="btn-group">
              <button
                type="button"
                class="btn border-1 dropdown-toggle fs-6"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={styles.currencyDropMenuTitle}>
                  Select Fiat Currency
                </span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <div className={styles.currencyli}>
                      <div>INR</div>
                      <div>Flag</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div className={styles.currencyli}>
                      <div>RUBLE</div>
                      <div>Flag</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <div className={styles.currencyli}>
                      <div>POND</div>
                      <div>Flag</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className={styles.currencyli}>
                      <div>USD</div>
                      <div>Flag</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2pHeader;
