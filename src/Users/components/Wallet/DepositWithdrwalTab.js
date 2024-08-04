import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../assets/css/walletTabs.css";
import styles from "../../assets/css/wallet.module.css";
import DepositReport from "./DepositReport";
import WithdrawalReport from "./WithdrawalReport";
import CombinedReport from "./CombinedReport";

const DepositWithdrwalTab = () => {
  return (
    <div className={styles.walletBox}>
      <Tabs>
        <TabList>
          <Tab>
            <div className={styles.walletTitle}>All Transactions</div>
          </Tab>
          <Tab>
            <div className={styles.walletTitle}>Deposit</div>
          </Tab>
          <Tab>
            <div className={styles.walletTitle}>Withdrawal</div>
          </Tab>
        </TabList>
        <div>
          <TabPanel>
            <CombinedReport />
          </TabPanel>
          <TabPanel>
            <DepositReport />
          </TabPanel>
          <TabPanel>
            <WithdrawalReport />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default DepositWithdrwalTab;
