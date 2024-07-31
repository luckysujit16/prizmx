import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/p2p.module.css";
import SmallScreenButton from "./SmallScreenButton";
import BuySellTab from "./BuySellTab";
import P2pDemanSupplyTab from "./P2pDemanSupplyTab";
import P2pUserData from "./P2pUserData";

const P2pTradeSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-fluid">
        {screenWidth < 768 && (
          <div className={screenWidth < 768 ? "large-screen" : "small-screen"}>
            <SmallScreenButton />
          </div>
        )}
        <div className={styles.p2pContainer}>
          <P2pDemanSupplyTab />
          <BuySellTab />
          <P2pUserData />
        </div>
      </div>
    </>
  );
};

export default P2pTradeSection;
