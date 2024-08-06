import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSwap } from "react-icons/ai";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import imgLogo from "../../../Home/assets/img/logo/dark-logo.png";
import styles from "../../assets/css/dashboard.module.css";
import styles1 from "../../assets/css/p2p.module.css";
import DashDropDownMenu from "./DashDropDownMenu";

const DashNav = () => {
  const newStyles = { ...styles, ...styles1 };
  let navigate = useNavigate();

  const routeChange = (event) => {
    const { name, value } = event.target;
    console.log("Entered routeChange Name =", name, "Value =", value);
    switch (value) {
      case "transactions":
        navigate("/user/transactions");
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
    <>
      <div className={newStyles.dashheader}>
        <div className={newStyles.logoSection}>
          <img
            onClick={() => navigate("/user")}
            src={imgLogo}
            alt="Prizm Logo"
            className={newStyles.imgLogo}
          />
        </div>
        <div className={newStyles.navSection}>
          <form className={newStyles.searchForm}>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className={newStyles.menuSection}>
          <Link to="/user/transactions">
            <div className={styles.menuButton}>           
              <MdKeyboardDoubleArrowDown />           
            </div>
            <p className={newStyles.fontSmall}>Deposit Crypto</p>
          </Link>
        </div>
        <div className={newStyles.menuSection}>
          <Link to="/user/transactions">
            <div className={newStyles.menuButton}>           
              <AiOutlineSwap />
            </div>
            <p className={newStyles.fontSmall}>Swap Crypto</p>
          </Link>
        </div>
        <div className={newStyles.profileSection}>
          <DashDropDownMenu />
        </div>
      </div>
    </>
  );
};

export default DashNav;
