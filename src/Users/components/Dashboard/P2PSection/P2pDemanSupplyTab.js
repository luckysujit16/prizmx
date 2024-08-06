import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../assets/css/customTab.css";
import styles from "../../../assets/css/p2p.module.css";
import P2pSupply from "./P2pSupply";
import P2pDemand from "./P2pDemand";

const P2pDemanSupplyTab = () => {
  return (
    <div>
      <div className={styles.p2pBox}>
        <Tabs>
          <TabList>
            <Tab>
              <div className={styles.p2pBuyTitle}>Buy</div>
            </Tab>
            <Tab>
              <div className={styles.p2pBuyTitle}>Sell</div>
            </Tab>
          </TabList>
          <div className={styles.p2pDemandSupplyTitle}>
            <TabPanel>
              <P2pSupply />
            </TabPanel>
            <TabPanel>
              <P2pDemand />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default P2pDemanSupplyTab;
