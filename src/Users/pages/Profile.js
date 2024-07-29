import React from "react";
import styles from "../../Users/assets/css/profile.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashFooter from "../components/Dashboard/DashFooter";

const Profile = () => {
  return (
    <>
      <DashNav />
      <div className="fullHeight">
        <div className="container-fluid">
          <div className={styles.walletDiv}>
            <div className="row">
              <p className={styles.walletTitle}>Profile</p>
            </div>
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
};

export default Profile;
