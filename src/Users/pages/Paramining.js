import React from "react";
import styles from "../assets/css/paramining.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashData from "../components/Dashboard/DashData";
import ParaData from "../components/Paramining/ParaData";

const Paramining = () => {
  return (
    <>
      <DashNav />
      <DashData />
      <div className="container-fluid">
        <div className={styles.paraHeader}>Paramining Data</div>
        <ParaData />
      </div>
    </>
  );
};

export default Paramining;
