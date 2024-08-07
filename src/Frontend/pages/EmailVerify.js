import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Link, Navigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";

const EmailVerify = () => {
  const newStyles = { ...styles, ...styles1 };
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSuccess = () => {
    // Perform any other success actions

    return <Navigate to="/login" />;
  };
  useEffect(() => {
    setShowConfetti(true);
  });

  return (
    <>
      <div className={newStyles.rowBothSidePadding}>
        <div className={newStyles.twoColumnRow}>
          <div className={newStyles.logoSection}>
            <img src={imgLogo} alt="Prizm Logo" className={newStyles.imgLogo} />
          </div>
          <div className={newStyles.menuSection}>
            <Link to="/login">
              <button
                name="login"
                value="login"
                type="button"
                className={newStyles.menuButton}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="contianer-fluid">
        <div className={newStyles.emailSuccessDiv}>
          <div className={newStyles.formSection}>
            <p className="text-center text-success fw-semibold">
              Email Verified Successfully
            </p>
            <Link to="/login">
              <button onClick={handleSuccess}>Login Now</button>
            </Link>
            {showConfetti && <Confetti />}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerify;
