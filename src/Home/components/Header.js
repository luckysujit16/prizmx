// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../home.module.css";
import logodark from "../assets/img/logo/dark-logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col p-2">
            <span className="text-success fs-6 fw-bold">Buy : $ 1</span>
            <span className="text-danger fs-6 fw-bold mx-2">Sell : $ 0.99</span>
          </div>
          <div className="col text-end">
            <button className={styles.headerButton}>Get 1 PRIZMX</button>
          </div>
        </div>
      </div>
      <div className="container">
        <header className={styles.header}>
          <img src={logodark} alt="PrizmX dark Logo" className={styles.logo} />
          <div className={styles.menubar}>
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                // type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      PrizmX
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      P2P
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Blockchain
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
