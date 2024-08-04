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
        <div className={styles.mediumBoldFont}>Wallet</div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("deposit")}
        className={styles.walletIcons}
      >
        <MdKeyboardDoubleArrowDown />
        <div className={styles.mediumBoldFont}>Deposit Crypto</div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("withdrawal")}
        className={styles.walletIcons}
      >
        <MdKeyboardDoubleArrowUp />
        <div className={styles.mediumBoldFont}>Withdraw Crypto</div>
      </button>
      <button
        type="button"
        onClick={() => setActiveTab("swap")}
        className={styles.walletIcons}
      >
        <MdOutlineSwapHoriz />
        <div className={styles.mediumBoldFont}>Swap Crypto</div>
      </button>
    </div>
  );
};

WalletMenuSection.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default WalletMenuSection;
