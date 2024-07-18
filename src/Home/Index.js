// src/Home/Index.js
import React from "react";
import styles from "./home.module.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Home/components/Header";
import Body from "../Home/components/Body";
import Footer from "../Home/components/Footer";
import CustomCarousel from "../Home/components/Carousel";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="row">
        <CustomCarousel />
        <Banner />
      </div>
      <div className="row">
        <Body />
      </div>
      <div className="row">
        <Footer />
      </div>
    </>
  );
};

export default Home;
