// src/Home/Index.js
import React from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Home/components/Header";
import Body from "../Home/components/Body";
import Footer from "../Home/components/Footer";
import AdCarousel from "../Home/components/AdCarousel";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="row">
        <AdCarousel />
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
