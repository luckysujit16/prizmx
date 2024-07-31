import React from "react";
import styles from "../../../assets/css/p2p.module.css";
import P2pTradePreference from "./P2pTradePreference";

const P2pBuy = () => {
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
          <div className="row pt-4 px-3">
            <button type="button">PLACE P2P BUY ORDER</button>
          </div>
        </form>
      </div>
      <P2pTradePreference />
    </>
  );
};

export default P2pBuy;
