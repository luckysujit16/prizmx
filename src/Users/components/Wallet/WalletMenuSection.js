import React from "react";
import styles from "../../assets/css/wallet.module.css";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
  MdOutlineAccountBalanceWallet,
  MdOutlineSwapHoriz,
} from "react-icons/md";
import PropTypes from "prop-types";

const WalletMenuSection = ({ setActiveTab }) => {
  return (
    <div className={styles.walletMenu}>
      <button
        type="button"
        onClick={() => setActiveTab("report")}
        className={styles.walletIcons}
      >
        <MdOutlineAccountBalanceWallet />
        <span className={styles.mediumBoldFont}>Wallet</span>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("deposit")}
        className={styles.walletIcons}
      >
        <MdKeyboardDoubleArrowDown />
        <span className={styles.mediumBoldFont}>Deposit Crypto</span>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("withdrawal")}
        className={styles.walletIcons}
      >
        <MdKeyboardDoubleArrowUp />
        <span className={styles.mediumBoldFont}>Withdraw Crypto</span>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("swap")}
        className={styles.walletIcons}
      >
        <MdOutlineSwapHoriz />
        <span className={styles.mediumBoldFont}>Swap Crypto</span>
      </button>
    </div>
  );
};

WalletMenuSection.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default WalletMenuSection;
