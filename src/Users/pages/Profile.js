import React, { useState } from "react";
import styles from "../../Users/assets/css/profile.module.css";
import styles1 from "../assets/css/p2p.module.css";
import styles2 from "../assets/css/dashboard.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashFooter from "../components/Dashboard/DashFooter";
import AdCarousel from "../../Home/components/AdCarousel";
import { UserPersonalData } from "../components/Profile/UserPersonalData";
import UserMenu from "../components/Profile/UserMenu";
import UserSecurity from "../components/Profile/UserSecurity";
import UserCommunication from "../components/Profile/UserCommunication";
import UserPayment from "../components/Profile/UserPayment";
import UserKyc from "../components/Profile/UserKyc";

const Profile = () => {
  const newStyles = { ...styles, ...styles1, ...styles2 };
  const [activeTab, setActiveTab] = useState("communication"); // Default tab

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "kyc":
        return <UserKyc />;
      case "payment":
        return <UserPayment />;
      case "security":
        return <UserSecurity />;
      default:
        return <UserCommunication />;
    }
  };
  return (
    <>
      <DashNav />
      <AdCarousel />

      <div className="fullHeight">
        <div className="container-fluid">
          <div className={newStyles.row}>
            <UserPersonalData />
          </div>
        </div>
        <div className="container-fluid">
          <div className={styles.paddingTopBottom}>
            <div className={styles.userPrefDiv}>
              <UserMenu setActiveTab={setActiveTab} />
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>

      <DashFooter />
    </>
  );
};

export default Profile;
