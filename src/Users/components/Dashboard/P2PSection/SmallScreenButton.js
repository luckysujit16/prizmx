import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../assets/css/dashboard.module.css";

const SmallScreenButton = () => {
  let navigate = useNavigate();

  const routeChange = (event) => {
    const { name, value } = event.target;
    console.log("Entered routeChange Name =", name, "Value =", value);
    switch (value) {
      case "register":
        navigate("/register");
        break;
      case "verify":
        navigate("/verify");
        break;
      default:
        navigate("/user");
        break;
    }
  };
  return (
    <div className="row mx-2 my-3">
      <div className={styles.twoBoxgrid}>
        <div className={styles.swapButton}>
          <button
            onClick={routeChange}
            name="Registration"
            value="register"
            type="button"
            className={styles.menuButton}
          >
            Deposit Crypto
          </button>
        </div>
        <div className={styles.swapButton}>
          <button
            onClick={routeChange}
            name="Registration"
            value="register"
            type="button"
            className={styles.menuButton}
          >
            Swap Crypto To PZMX
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenButton;
