import React, { useState } from "react";
import styles from "../../Users/assets/css/wallet.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashFooter from "../components/Dashboard/DashFooter";
import BalanceData from "../components/Wallet/BalanceData";
import DepositWithdrwalTab from "../components/Wallet/DepositWithdrwalTab";
import WalletMenuSection from "../components/Wallet/WalletMenuSection";
import CryptoDeposit from "../components/Wallet/CryptoDeposit";
import CryptoWithdrawal from "../components/Wallet/CryptoWithdrawal";
import SwapCrypto from "../components/Wallet/SwapCrypto";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("deposit"); // Default tab

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "report":
        return <DepositWithdrwalTab />;
      case "withdrawal":
        return <CryptoWithdrawal />;
      case "swap":
        return <SwapCrypto />;
      default:
        return <CryptoDeposit />;
    }
  };

  return (
    <>
      <DashNav />
      <div className="fullHeight">
        <BalanceData />
        <div className="container-fluid">
          <div className={styles.walletDiv}>
            <WalletMenuSection setActiveTab={setActiveTab} />
            {renderActiveComponent()}
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
};

export default Wallet;
