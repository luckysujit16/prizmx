import React from "react";
import styles from "../../assets/css/profile.module.css";
import {
  MdOutlineHelp,
  MdOutlineAlternateEmail,
  MdSms,
  MdWhatsapp,
} from "react-icons/md";

const UserCommunication = () => {
  return (
    <div className="container-fluid">
      <div className={styles.userInfoDiv}>
        <div className={styles.commDiv}>
          <div className={styles.userTitle}>One Time Password</div>
          <div className={styles.profileRowThreeColumn}>
            <div className="fs-4 fw-bold">
              <MdOutlineAlternateEmail />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                Email
              </label>
            </div>
            <div className="fs-4 fw-bold">
              <MdSms />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                Mobile SMS
              </label>
            </div>
            <div className="fs-4 fw-bold">
              <MdWhatsapp />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                WhatsApp
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
          <div className={styles.userTitle}>Transaction Alerts</div>
          <div className={styles.profileRowThreeColumn}>
            <div className="fs-4 fw-bold">
              <MdOutlineAlternateEmail />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                Email
              </label>
            </div>
            <div className="fs-4 fw-bold">
              <MdSms />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                Mobile SMS
              </label>
            </div>
            <div className="fs-4 fw-bold">
              <MdWhatsapp />
              <label
                class="form-check-label px-3 fs-6 fw-bold"
                for="flexSwitchCheckDefault"
              >
                WhatsApp
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
          <div className={styles.helpPara}>
            Aliqua est et dolor fugiat culpa aliqua dolor ut nulla et eu
            voluptate laboris. Eu esse nisi consectetur occaecat reprehenderit
            aute irure sunt officia. Dolor aute aliquip aliqua adipisicing
            consectetur ipsum voluptate elit fugiat. Reprehenderit nisi pariatur
            nostrud reprehenderit nisi ullamco nostrud eiusmod deserunt enim.
            Commodo qui aliqua commodo anim excepteur adipisicing qui ipsum duis
            labore dolor. Commodo do anim est dolore sint irure eiusmod id ex
            ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCommunication;
