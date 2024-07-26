import React from "react";
import styles from "../assets/css/p2p.module.css";
import Dash_nav from "../components/Dash_nav";
import DashData from "../components/DashData";
import P2pDemand from "../components/P2pDemand";
import P2pBuy from "../components/P2pBuy";
import P2pSell from "../components/P2pSell";
import P2pSupply from "../components/P2pSupply";

const Dashboard = () => {
  return (
    <>
      <Dash_nav />
      <DashData />
      <div className="row px-5 pt-3 pb-3">
        <div className={styles.p2pTitle}>P2P Order Book</div>
        <div className={styles.p2pContainer}>
          <P2pDemand />
          <P2pBuy />
          <P2pSell />
          <P2pSupply />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
