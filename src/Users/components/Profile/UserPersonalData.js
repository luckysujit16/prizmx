import React from "react";
import styles from "../../assets/css/p2p.module.css";
import styles1 from "../../assets/css/profile.module.css";
import profileimg from "../../assets/img/icons/profile-icon.png";

export const UserPersonalData = () => {
  const newStyles = { ...styles, ...styles1 };
  return (
    <div className={newStyles.profileRowThreeColumn}>
      <div className={newStyles.profileBox}>
        <div className={newStyles.rowTopBottomPadding}>
          <img
            src={profileimg}
            alt="profile-image"
            className={newStyles.profileImg}
          />
        </div>
        <div className={newStyles.rowTopPadding}>
          <div className={newStyles.p2pRowTwoColumn}>
            <div className={newStyles.profileTitle}>ID : lUCKYSUJIT</div>
            <div className={newStyles.profileName}>Sujit S Jadhav</div>
          </div>
        </div>
      </div>
      <div className={newStyles.profileDataBox}>
        <div className={newStyles.rowTopBottomPadding}>
          <div className={newStyles.profileRowTwoColumn}>
            <div className={newStyles.profileTitle}>Email : </div>
            <div className={newStyles.profileTitle}>
              aaressinfomedia@gmail.com{" "}
              <i className="bi bi-check-all fs-5 text-success"></i>
            </div>

            <div className={newStyles.profileTitle}>Mobile :</div>
            <div className={newStyles.profileTitle}>
              {" "}
              +91 7387713333{" "}
              <i className="bi bi-check-all fs-5 text-success"></i>
            </div>

            <div className={newStyles.profileTitle}>Registration Date :</div>
            <div className={newStyles.profileTitle}>
              {" "}
              22nd November 2022 15:23:56{" "}
            </div>

            <div className={newStyles.profileTitle}>KYC Status :</div>
            <div className={newStyles.profileTitle}>
              Verified <i className="bi bi-check-all fs-5 text-success"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={newStyles.profileDataBox}>
        <div className={newStyles.rowTopBottomPadding}>
          <div className={newStyles.profileRowFourColumn}>
            <div className={newStyles.profileTitle}>Registered Days </div>
            <div className={newStyles.profileTitle}>425 days</div>

            <div className={newStyles.profileTitle}>Last Trade Date</div>
            <div className={newStyles.profileTitle}>20th July 2024</div>

            <div className={newStyles.profileTitle}>Last Week Total Trade</div>
            <div className={newStyles.profileTitle}> $ 4256 </div>

            <div className={newStyles.profileTitle}>
              Last month Total Trades
            </div>
            <div className={newStyles.profileTitle}> $ 49562</div>
          </div>
          <div className={newStyles.feedbackRowFourColumn}>
            <div className={newStyles.feedbackTitle}> Postive Feedback </div>
            <div className={newStyles.profileFeedback}>
              <i className="bi bi-hand-thumbs-up"> 243 </i>
            </div>
            <div className={newStyles.feedbackTitle}> Negative Feedback </div>
            <div className={newStyles.profileFeedback}>
              <i className="bi bi-hand-thumbs-down"> 12 </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
