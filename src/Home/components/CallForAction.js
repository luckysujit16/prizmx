import React from "react";
import styles from "../home.module.css";

const CallForAction = () => {
  return (
    <div className={styles.SpacerSection}>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <p className="text-light fw-semibold">
              SIMPLY REGISTER WITH VALID EMAIL AND VALID KYC TO
            </p>
            <h2>GET ONE PRIZMX FREE</h2>
            <p>SIGN-UP & Start PARAMINING RIGHT AWAY!</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-5">
            <div className={styles.callForAction}>
              <button type="button" className="btn btn-info text-light fw-bold">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForAction;
