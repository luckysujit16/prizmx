import React from "react";
import styles from "../../assets/css/profile.module.css";
import userImg from "../../assets/img/icons/profile-icon.png";
import {
  MdOutlineHelp,
  MdOutlineAlternateEmail,
  MdEmail,
  MdWhatsapp,
} from "react-icons/md";
import { FaIdCard, FaSimCard } from "react-icons/fa6";

const UserKyc = () => {
  return (
    <div className={styles.userInfoDiv}>
      <div className={styles.commDiv}>
        <div className={styles.userTitle}>KYC</div>
        <div className={styles.rowThreeColumnKYC}>
          <div className={styles.mediumBoldFontCenter}>
            <MdEmail />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Email
            </label>
            <i class="bi bi-check-all fs-5 text-success"></i>
          </div>
          <div className={styles.mediumBoldFontCenter}>
            <FaSimCard />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              Mobile
            </label>
            <i class="bi bi-check-all fs-5 text-success"></i>
          </div>
          <div className={styles.mediumBoldFontCenter}>
            <FaIdCard />
            <label class="form-check-label px-2" for="flexSwitchCheckDefault">
              ID Card
            </label>
            <i class="bi bi-check-all fs-5 text-success"></i>
          </div>
        </div>
        <div className={styles.rowTopBottomPadding}>
          <div className={styles.rowThreeColumnKYC}>
            <div className={styles.mediumBoldFontCenter}>
              <label class="form-check-label px-2" for="flexSwitchCheckDefault">
                aaressinfomedia@gmail.com
              </label>
            </div>
            <div className={styles.mediumBoldFontCenter}>
              <label class="form-check-label px-2" for="flexSwitchCheckDefault">
                8433968509
              </label>
            </div>
            <div className={styles.mediumBoldFontCenter}>
              <label class="form-check-label px-2" for="flexSwitchCheckDefault">
                Aadhar Card # 1234 XXXX XXXX
              </label>
            </div>
          </div>
        </div>
        <div className={styles.rowTwoColumnKYC}>
          <div className="form-check-label text-center"> Address </div>
          <div className="form-check-label text-center">User Image</div>
        </div>
        <div className={styles.rowTopBottomPadding}>
          <div className={styles.rowTwoColumnKYC}>
            <div className={styles.textRegular}>
              At. Post Tripui, Taluka : Koregaon, Dist, Satara, Maharashatra :
              401105
            </div>
            <div className={styles.userImg}>
              <img src={userImg} alt="user-photo" />
            </div>
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

export default UserKyc;
