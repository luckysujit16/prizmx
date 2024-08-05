import React from "react";
import styles from "../../assets/css/profile.module.css";
import { MdLockPerson, MdSecurity } from "react-icons/md";
import { RiMailSendFill, RiSecurePaymentFill } from "react-icons/ri";
import PropTypes from "prop-types";

const UserMenu = ({ setActiveTab }) => {
  return (
    <div className={styles.LeftMenu}>
      <button
        type="button"
        onClick={() => setActiveTab("communication")}
        className={styles.menuTitle}
      >
        <div className={styles.menuButton}>
          <div className={styles.buttonIcon}>
            <RiMailSendFill />
          </div>
          <div className={styles.buttoText}>Preferences</div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("kyc")}
        className={styles.menuTitle}
      >
        <div className={styles.menuButton}>
          <div className={styles.buttonIcon}>
            <MdLockPerson />
          </div>
          <div className={styles.buttoText}>KYC</div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("security")}
        className={styles.menuTitle}
      >
        <div className={styles.menuButton}>
          <div className={styles.buttonIcon}>
            <MdSecurity />
          </div>
          <div className={styles.buttoText}>Security</div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("payment")}
        className={styles.menuTitle}
      >
        <div className={styles.menuButton}>
          <div className={styles.buttonIcon}>
            <RiSecurePaymentFill />
          </div>
          <div className={styles.buttoText}>Payment</div>
        </div>
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default UserMenu;
