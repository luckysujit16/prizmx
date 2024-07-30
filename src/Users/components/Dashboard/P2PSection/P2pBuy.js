import React from "react";
import styles from "../../../assets/css/p2p.module.css";

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
      <div className={styles.p2prow}>
        <div className={styles.formTitleSmall}>Set Trade Preferenceses</div>
      </div>
      <div className={styles.p2prow}>
        <div className={styles.p2pPrefrow}>
          <div className="form-check form-switch">
            <label className="form-check-label" for="flexSwitchCheckDefault">
              KYC Verified Users
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>

          <div className="form-check form-switch">
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Verified Merchants
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className={styles.p2pRowThreeColumn}>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" for="inlineCheckbox2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
              disabled
            />
            <label className="form-check-label" for="inlineCheckbox3">
              3 (disabled)
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default P2pBuy;
