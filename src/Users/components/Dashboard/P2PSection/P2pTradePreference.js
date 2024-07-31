import React from "react";
import styles from "../../../assets/css/p2p.module.css";

const P2pTradePreference = () => {
  return (
    <>
      <div className={styles.p2pRowTwoColumn}>
        <div className={styles.formTitleSmall}>Set Trade Preferenceses</div>
        <div className={styles.filterAmountDropdown}>
          <div className="dropdown">
            <button
              type="button"
              className="btn border-1 dropdown-toggle fs-6"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className={styles.currencyDropMenuTitle}>
                Filter Trade Value in INR
              </span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item text-wrap">
                  <div className={styles.p2prow}>
                    <div>100 to 999 </div>
                    <div>1000 to 9999</div>
                    <div>1000 to 99999</div>
                    <div>10000 to 999999</div>
                    <div>100000 to 9999999</div>
                    <div>Highest </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.p2prow}>
        <div className={styles.p2pRowTwoColumn}>
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
            <label className="form-check-label" for="inlineCheckbox1">
              Balance <i class="bi bi-chevron-right"></i> $ 100
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
              Balance <i class="bi bi-chevron-right"></i> $ 1000
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label className="form-check-label" for="inlineCheckbox3">
              Balance <i class="bi bi-chevron-right"></i> $ 10000
            </label>
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
            <label className="form-check-label" for="inlineCheckbox1">
              Feedback <i class="bi bi-chevron-right"></i>
              <i class="bi bi-hand-thumbs-up"></i> 50%
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
              Feedback <i class="bi bi-chevron-right"></i>
              <i class="bi bi-hand-thumbs-up"></i> 70%
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label className="form-check-label" for="inlineCheckbox3">
              Feedback <i class="bi bi-chevron-right"></i>
              <i class="bi bi-hand-thumbs-up"></i> 90%
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default P2pTradePreference;
