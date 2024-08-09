import React from "react";
import styles from "../../assets/css/wallet.module.css";

const BalanceData = () => {
  return (
    <div className={styles.wallet}>
      <div className={styles.walletHeader}>
        <div className={styles.walletTitle}>Total Balance</div>
        <div className={styles.walletTitle}>BTC Value Of Total Balance</div>
        <div className={styles.walletTitle}>
          Balance Value In Local Currency
        </div>
        <div className={styles.walletTitle}>Total Balance Value In PrizmX</div>
        <div className={styles.walletBalanceAmount}>
          <i className="bi bi-currency-dollar"></i> 56475
        </div>
        <div className={styles.walletBalanceAmount}>
          <i className="bi bi-currency-bitcoin"></i> 0.85
        </div>
        <div className={styles.walletBalanceAmount}>
          <i className="bi bi-currency-rupee"></i> 4687425
        </div>
        <div className={styles.walletBalanceAmount}>
          <i className="bi bi-currency-rupee"></i> 56475
        </div>
      </div>
    </div>
  );
};

export default BalanceData;
