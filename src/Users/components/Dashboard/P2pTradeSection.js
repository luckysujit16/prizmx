import React from "react";
import styles from "../../../Users/assets/css/p2p.module.css";
import P2pDemand from "../../components/Dashboard/P2pDemand";
import P2pBuy from "../../components/Dashboard/P2pBuy";
import P2pSell from "../../components/Dashboard/P2pSell";
import P2pSupply from "../../components/Dashboard/P2pSupply";

const P2pTradeSection = () => {
  return (
    <div className="container-fluid">
      <div className={styles.p2pContainer}>
        <P2pDemand />
        <P2pBuy />
        <P2pSell />
        <P2pSupply />
      </div>
    </div>
  );
};

export default P2pTradeSection;
