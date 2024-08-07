import React from "react";
import styles from "../../assets/css/profile.module.css";
import { SiGoogleauthenticator } from "react-icons/si";
import {
  MdOutlineHelp,
  MdOutlineAlternateEmail,
  MdSms,
  MdWhatsapp,
} from "react-icons/md";

const UserSecurity = () => {
  return (
    <div className={styles.userInfoDiv}>
      <div className={styles.commDiv}>
        <div className={styles.userTitle}>Account Security</div>
        <div className={styles.rowThreeColumn}>
          <div className={styles.mediumBoldFont}>
            <MdOutlineAlternateEmail />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Email
            </label>
          </div>
          <div className={styles.mediumBoldFont}>
            <MdSms />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Mobile SMS
            </label>
          </div>
          <div className={styles.mediumBoldFont}>
            <SiGoogleauthenticator />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Google Authenticator
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className={styles.userTitle}>Transaction Security</div>
        <div className={styles.rowThreeColumn}>
          <div className={styles.mediumBoldFont}>
            <MdOutlineAlternateEmail />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Email
            </label>
          </div>
          <div className={styles.mediumBoldFont}>
            <MdSms />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Mobile SMS
            </label>
          </div>
          <div className={styles.mediumBoldFont}>
            <SiGoogleauthenticator />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Google Authenticator
            </label>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
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

export default UserSecurity;
