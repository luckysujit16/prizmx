import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/p2p.module.css";
import SmallScreenButton from "./SmallScreenButton";
import BuySellTab from "./BuySellTab";
import P2pDemanSupplyTab from "./P2pDemanSupplyTab";
import P2pUserData from "./P2pUserData";
import P2pMobileViewDemandSupply from "./P2pMobileViewDemandSupply";

const P2pTradeSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth > 768 && (
        <div className="container-fluid">
          <div className={styles.p2pContainer}>
            <P2pDemanSupplyTab />
            <BuySellTab />
            <P2pUserData />
          </div>
        </div>
      )}
      {screenWidth < 768 && (
        <div className={screenWidth <= 1236 ? "small-screen" : "large-screen"}>
          <div className="container-fluid">
            <P2pMobileViewDemandSupply />
            <SmallScreenButton />
          </div>
        </div>
      )}
    </>
  );
};

export default P2pTradeSection;
