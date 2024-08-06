import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/p2p.module.css";

const P2pUserData = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {screenWidth > 768 && (
        <div className={styles.p2pBoxUserData}>
          <div className={styles.p2prow}>
            <div className={styles.p2pTitle}>User Profile Details</div>
            <div className={styles.rowTopPadding}>
              <div className={styles.rowTopBottomPadding}>ID : luckysujit</div>
            </div>
            <label className={styles.fontSmallBold}>Verified Status</label>
            <div className={styles.rowTopPadding}>
              <div className={styles.p2pRowSixColumn}>
                {" "}
                Email <i className="bi bi-check"></i> Mobile{" "}
                <i className="bi bi-check"></i> Bank{" "}
                <i className="bi bi-check"></i>
              </div>
            </div>
            <label className={styles.fontSmallBold}>Trade History</label>
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
          </div>
        </div>
      )}
    </>
  );
};

export default P2pUserData;
