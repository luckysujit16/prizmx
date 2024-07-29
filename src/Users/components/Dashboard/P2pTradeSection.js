import React, { useState, useEffect } from "react";

import styles from "../../../Users/assets/css/p2p.module.css";
import P2pDemand from "../../components/Dashboard/P2pDemand";
import P2pSupply from "../../components/Dashboard/P2pSupply";
import BuySellTab from "./BuySellTab";
import SmallScreenButton from "./SmallScreenButton";

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
            {/* <div className="row mx-2 my-3">
              <div className={styles.swapButton}>
                <button
                  onClick={routeChange}
                  name="Registration"
                  value="register"
                  type="button"
                  className={styles.menuButton}
                >
                  SWAP CRYPTO TO PZMX
                </button>
              </div>
            </div> */}
            <SmallScreenButton />
          </div>
        )}
        <div className={styles.p2pContainer}>
          <P2pDemand />
          <BuySellTab />
          <P2pSupply />
        </div>
      </div>
    </>
  );
};

export default P2pTradeSection;
