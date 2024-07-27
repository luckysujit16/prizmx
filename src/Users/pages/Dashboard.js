import React from "react";
import styles from "../assets/css/p2p.module.css";
import DashNav from "../components/DashNav";
import DashData from "../components/DashData";
import P2pDemand from "../components/P2pDemand";
import P2pBuy from "../components/P2pBuy";
import P2pSell from "../components/P2pSell";
import P2pSupply from "../components/P2pSupply";
import DashFooter from "../components/DashFooter";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <DashData />
      <div className="container-fluid">
        <div className="row px-4 pt-3 pb-3">
          <div className={styles.p2pTitle}>P2P Order Book</div>
          <div className={styles.p2pContainer}>
            <P2pDemand />
            <P2pBuy />
            <P2pSell />
            <P2pSupply />
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
};

export default Dashboard;
