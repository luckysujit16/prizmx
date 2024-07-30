import React from "react";
import styles from "../../../assets/css/p2p.module.css";

const P2pSell = () => {
  return (
    <>
      <div className={styles.p2prow}>
        <form className={styles.buyForm}>
          <div className={styles.buyFormRow}>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Qunatity"
              aria-label="Qnt"
            />
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              aria-label="Qnt"
            />
          </div>
          <div className="row p-3">
            <button type="button">PLACE P2P SELL ORDER</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default P2pSell;
