import React from "react";
import styles from "../../assets/css/profile.module.css";
import UserKyc from "./UserKyc";

const UserProfile = () => {
  return (
    <div className={styles.userProfileDiv}>
      <UserKyc />
    </div>
  );
};

export default UserProfile;
