import React from "react";
import styles from "../assets/css/p2p.module.css";

const P2pSupply = () => {
  return (
    <div>
      <div className={styles.p2pDemandBox}>
        <div className={styles.p2pOrderBookTitle}>Sell Orders</div>

        <div className={styles.p2pcolumn}>
          <div className={styles.p2pcolumnTitle}>User ID</div>
          <div className={styles.p2pcolumnTitle}>Quantity</div>
          <div className={styles.p2pcolumnTitle}>Price</div>
          <div className={styles.p2pcolumnTitle}>Payment Mode</div>
        </div>
        <div className={styles.p2prow}></div>
      </div>
    </div>
  );
};

export default P2pSupply;
