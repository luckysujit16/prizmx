import React from "react";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../../Home/assets/img/logo/dark-logo.png";
import styles from "../../assets/css/dashboard.module.css";

const DashNav = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    const { name, value } = path.target;

    console.log("Entered routeChange Name = ", +name + " Value " + value);
    switch (value) {
      case "register":
        navigate("/register");
        break;
      case "verify":
        navigate("/verify");
        break;
      // Add more cases as needed
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row d-flex px-3 my-3">
        <div className={styles.logoSection}>
          <img
            onClick={routeChange}
            value="/"
            src={imgLogo}
            alt="Prizm Logo"
            className={styles.imgLogo}
          />
        </div>
        <div className={styles.navSection}>
          <form className={styles.searchForm}>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className={styles.menuSection}>
          <button
            onClick={routeChange}
            name="Registration"
            value="register"
            type="button"
            className={styles.menuButton}
          >
            SWAP CRYPTO TO USD
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
