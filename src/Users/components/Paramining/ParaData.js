import React from "react";
import styles from "../../assets/css/paramining.module.css";
import { MdOutlineAccountBalanceWallet, MdAddCard } from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";
import { LuBaggageClaim } from "react-icons/lu";

const ParaData = () => {
  return (
    <div className={styles.paraDataTwoColumn}>
      <div>
        {/* 1st Data Row */}
        <div className={styles.paraDataDiv}>
          <div>
            <div className={styles.paraDataIcon}>
              <BsMinecartLoaded />
              <div className={styles.paraData}>Live Para Mining</div>
            </div>
          </div>
          <div className={styles.paraNumber}>14235</div>
        </div>
        <div className={styles.paraDataDiv}>
          <div className={styles.paraIconDiv}>
            <div className={styles.paraDataIcon}>
              <MdOutlineAccountBalanceWallet />
              <div className={styles.paraData}>PZMX Balance</div>
            </div>
          </div>
          <div className={styles.paraNumber}>14235</div>
        </div>
        {/* 1st Data Row End */}

        {/* 2nd Data Row */}
        <div className={styles.paraDataDiv}>
          <div>
            <div className={styles.paraDataIcon}>
              <LuBaggageClaim />
              <div className={styles.paraData}>Para Mined Coins</div>
            </div>
          </div>
          <div className={styles.paraNumber}>14235</div>
        </div>
        <div className={styles.paraDataDiv}>
          <div>
            <div className={styles.paraDataIcon}>
              <MdAddCard />
              <div className={styles.paraData}>Total Redeemed Coins</div>
            </div>
          </div>
          <div className={styles.paraNumber}>14235</div>
        </div>
      </div>
      {/* End 2nd Data Row */}
      <div className={styles.paraActionDiv}></div>
    </div>
  );
};

export default ParaData;
