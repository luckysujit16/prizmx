import React from "react";
import styles from "../../assets/css/p2p.module.css";

const P2pSell = () => {
  return (
    <div>
      <div className={styles.p2pDemandBox}>
        <div className={styles.p2pBuyTitle}>P2P Sell</div>

        <div className={styles.p2prow}>
          <form className={styles.buyForm}>
            <div className={styles.buyFormRow}>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Qunatity"
                aria-label="Qnt"
              />
              <input
                type="number"
                class="form-control"
                placeholder="Enter Price"
                aria-label="Qnt"
              />
            </div>
            <div className="row p-3">
              <button type="button">PLACE P2P SELL ORDER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default P2pSell;
