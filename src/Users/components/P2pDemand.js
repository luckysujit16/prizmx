import React from "react";
import styles from "../assets/css/p2p.module.css";

const P2pDemand = () => {
  return (
    <>
      <div className={styles.p2pDemandBox}>
        <div className={styles.p2pOrderBookTitle}>Buy Orders</div>

        <div className={styles.p2pcolumn}>
          <div className={styles.p2pcolumnTitle}>User ID</div>
          <div className={styles.p2pcolumnTitle}>Quantity</div>
          <div className={styles.p2pcolumnTitle}>Price</div>
          <div className={styles.p2pcolumnTitle}>Payment Mode</div>
        </div>
        <div className={styles.p2pdataRow}>
          <div className={styles.p2pdataColumn}>luckysujit</div>
          <div className={styles.p2pdataColumn}>0.5</div>
          <div className={styles.p2pdataColumn}>20</div>
          <div className={styles.p2pdataColumn}>UPI</div>
        </div>
      </div>
    </>
  );
};

export default P2pDemand;
