// src/Home/Index.js
import React from "react";
import styles from "./home.module.css";
import Header from "../Home/components/Header";
import Body from "../Home/components/Body";
import Footer from "../Home/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Body>
        <h1>Welcome to Prizmx Crypto Exchange</h1>
        <p>The best place to exchange your cryptocurrencies.</p>
      </Body>
      <Footer />
    </div>
  );
};

export default Home;
