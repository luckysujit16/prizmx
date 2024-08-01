import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../assets/css/customTab.css";
import styles from "../../../assets/css/p2p.module.css";
import P2pMobileViewBuyOrders from "./P2pMobileViewBuyOrders";
import P2pMobileViewSellOrders from "./P2pMobileViewSellOrders";

const P2pMobileViewDemandSupply = () => {
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
          <TabPanel>
            <P2pMobileViewBuyOrders />
          </TabPanel>
          <TabPanel>
            <P2pMobileViewSellOrders />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default P2pMobileViewDemandSupply;
