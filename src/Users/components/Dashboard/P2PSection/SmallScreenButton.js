import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";
import styles1 from "../../../assets/css/p2p.module.css";
import styles from "../../../assets/css/dashboard.module.css";

const SmallScreenButton = () => {
  const newStyles = { ...styles, ...styles1 };
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
          <div className={styles.menuButton}>
            <MdKeyboardDoubleArrowDown />
          </div>
          <p className={newStyles.fontSmall}>Deposit Crypto</p>
        </div>
        <div className={styles.swapButton}>
          <div className={styles.menuButton}>
            <AiOutlineSwap />
          </div>
          <p className={newStyles.fontSmall}>Swap</p>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenButton;
