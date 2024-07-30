import React from "react";
import DashNav from "../components/Dashboard/DashNav";
import DashData from "../components/Dashboard/DashData";
import DashFooter from "../components/Dashboard/DashFooter";
import P2pHeader from "../components/Dashboard/P2PSection/P2pHeader";
import P2pTradeSection from "../components/Dashboard/P2PSection/P2pTradeSection";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <div className="fullHeight">
        <DashData />
        <P2pHeader />
        <P2pTradeSection />
      </div>
      <DashFooter />
    </>
  );
};

export default Dashboard;
