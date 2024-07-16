// src/pages/Dashboard.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Dashboard.module.css";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div className={styles.cards}>
          <Card title="Balance" value="$10,000" />
          <Card title="Total Trades" value="150" />
          <Card title="Pending Withdrawals" value="$500" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
