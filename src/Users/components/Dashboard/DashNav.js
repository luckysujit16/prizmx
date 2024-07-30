import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import imgLogo from "../../../Home/assets/img/logo/dark-logo.png";
import styles from "../../assets/css/dashboard.module.css";

const DashNav = () => {
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
      <div className="container-fluid ">
        <div className={styles.dashheader}>
          <div className={styles.logoSection}>
            <img
              onClick={() => navigate("/user")}
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
              name="transactions"
              value="transactions"
              type="button"
              className={styles.menuButton}
            >
              SWAP CRYPTO TO PZMX
            </button>
          </div>
          <div className={styles.profileSection}>
            <Link to="/user/profile">
              <FaRegUserCircle />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNav;
