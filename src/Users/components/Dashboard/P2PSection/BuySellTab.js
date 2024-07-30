import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "../../../assets/css/p2p.module.css";
import "react-tabs/style/react-tabs.css";
import P2pBuy from "./P2pBuy";
import P2pSell from "./P2pSell";

const BuySellTab = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth > 768 && (
        <Tabs>
          <div className={styles.p2pDemandBox}>
            <TabList>
              <Tab>
                <div className={styles.p2pBuyTitle}>P2P Buy</div>
              </Tab>
              <Tab>
                <div className={styles.p2pBuyTitle}>P2P Sell</div>
              </Tab>
            </TabList>

            <TabPanel>
              <P2pBuy />
            </TabPanel>
            <TabPanel>
              <P2pSell />
            </TabPanel>
          </div>
        </Tabs>
      )}
    </>
  );
};

export default BuySellTab;
