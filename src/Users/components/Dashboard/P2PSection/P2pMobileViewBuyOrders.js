import React from "react";
import styles from "../../../assets/css/p2p.module.css";

const P2pMobileViewBuyOrders = () => {
  return (
    <div className={styles.p2pBoxUserData}>
      <div className={styles.p2prow}>
        <div className={styles.p2pRowTwoColumn}>
          <div className={styles.fontMediumBold}>Buy Qnt : $ 400</div>
          <div className={styles.fontSmall}>Min Trade Size : $ 100</div>
        </div>
        <div className={styles.p2pRowNoPadding}>
          <div className={styles.p2pRowTwoColumn}>
            <div className={styles.rowTopBottomPadding}>
              <p className={styles.fontMediumBold}>ID</p>
            </div>
            <div className={styles.rowTopBottomPadding}>
              <p className={styles.fontMediumBold}>Verification Status</p>
            </div>
            <div className={styles.fontMedium}>luckysujit</div>
            <div className={styles.fontMedium}>
              <div className={styles.p2pRowSixColumn}>
                {" "}
                Email <i className="bi bi-check"></i> Mobile{" "}
                <i className="bi bi-check"></i> Bank{" "}
                <i className="bi bi-check"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowBottomPadding}>
          <div className={styles.p2pRowFourColumn}>
            <span className={styles.fontSmallBold}>Positive Feedback</span>
            <span>
              <i className="bi bi-hand-thumbs-up"></i> 20
            </span>
            <span className={styles.fontSmallBold}>Negative Feedback</span>
            <span>
              {" "}
              <i className="bi bi-hand-thumbs-down"></i> 2
            </span>
          </div>
        </div>
        <button
          className={styles.p2pButton}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <label className={styles.fontSmallBold}>Trade History</label>
        </button>

        {/* </label> */}
        <div className="collapse pt-3" id="collapseExample">
          <div className="card card-body">
            <div className={styles.rowTopPadding}>
              <div className={styles.p2pRowFourColumn}>
                <span className={styles.fontSmallBold}>Registered Sinces</span>
                <span className={styles.fontSmall}>412 days</span>
                <span className={styles.fontSmallBold}>30 Days Trades</span>
                <span className={styles.fontSmall}>
                  Success : 20 <br />
                  Failed : 2
                </span>
                <span className={styles.fontSmallBold}>
                  7 Days Trade Volume{" "}
                </span>
                <span className={styles.fontSmall}>$ 512</span>
                <span className={styles.fontSmallBold}>30 Days Trades</span>
                <span className={styles.fontSmall}>$ 10250</span>
                <span className={styles.fontSmallBold}>
                  365 Days Trade Volume{" "}
                </span>
                <span className={styles.fontSmall}>$ 50012</span>
                <span className={styles.fontSmallBold}>Life Time Trades</span>
                <span className={styles.fontSmall}>$ 102050</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2pMobileViewBuyOrders;
