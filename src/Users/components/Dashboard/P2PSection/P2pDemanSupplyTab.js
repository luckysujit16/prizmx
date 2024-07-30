import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "../../../assets/css/p2p.module.css";
import "react-tabs/style/react-tabs.css";
import P2pSupply from "./P2pSupply";
import P2pDemand from "./P2pDemand";

const P2pDemanSupplyTab = () => {
  return (
    <div>
      <Tabs>
        <div className={styles.p2pDemandBox}>
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
        </div>
      </Tabs>
    </div>
  );
};

export default P2pDemanSupplyTab;
