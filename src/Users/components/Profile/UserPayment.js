import React from "react";
import styles from "../../assets/css/profile.module.css";
import { MdOutlineHelp } from "react-icons/md";

const UserPayment = () => {
  return (
    <div className={styles.userInfoDiv}>
      <div className={styles.commDiv}>
        <div className={styles.userTitle}>Payment Settings</div>
        <div className={styles.rowTwoColumn}>
          <div className={styles.profileTitle}>Account Holder Name</div>
          <div className={styles.textRegularLeft}>Sujit S Jadhav</div>

          <div className={styles.profileTitle}>Bank Account #</div>
          <div className={styles.textRegularLeft}>123213123212</div>

          <div className={styles.profileTitle}>Branch</div>
          <div className={styles.textRegularLeft}>Satara</div>

          <div className={styles.profileTitle}>IFSC / Routing Code</div>
          <div className={styles.textRegularLeft}>ICIC0006460</div>
        </div>
      </div>
      <div className={styles.userHelp}>
        <div className={styles.userTitle}>
          <span className="px-3 text-secondary">Help</span>
          <span className="text-secondary">
            <MdOutlineHelp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserPayment;
