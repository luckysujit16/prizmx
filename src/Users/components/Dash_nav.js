import React from "react";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/css/Dashboard.module.css";

const Dash_nav = () => {
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
      <div className="row d-flex px-5 my-3">
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
              class="form-control"
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
            P2P PZMX
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dash_nav;
