import React from "react";
import styles from "../../Users/assets/css/profile.module.css";
import styles1 from "../assets/css/p2p.module.css";
import styles2 from "../assets/css/dashboard.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashFooter from "../components/Dashboard/DashFooter";
import AdCarousel from "../../Home/components/AdCarousel";
import { UserPersonalData } from "../components/Profile/UserPersonalData";

const Profile = () => {
  const newStyles = { ...styles, ...styles1, ...styles2 };
  return (
    <>
      <DashNav />
      <AdCarousel />
      <div className="container-fluid">
        <div className="fullHeight">
          <div className={newStyles.row}>
            <div className={newStyles.rowBottomPadding}>
              <p className={newStyles.p2pTitle}>Profile</p>
              <UserPersonalData/>
            </div>
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
};

export default Profile;
