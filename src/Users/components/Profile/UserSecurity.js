import React from "react";
import styles from "../../assets/css/profile.module.css";
import { MdOutlineHelp } from "react-icons/md";

const UserSecurity = () => {
  return (
    <div className="container-fluid">
      <div className={styles.userInfoDiv}>
        <div className={styles.userTitle}>Security Settings</div>
        <div className={styles.userHelp}>
          <div className={styles.userTitle}>
            <span className="px-3 text-secondary">Help</span>
            <span className="text-secondary">
              <MdOutlineHelp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSecurity;
