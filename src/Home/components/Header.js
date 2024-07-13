// src/components/Header.js
import React from "react";
import styles from "../home.module.css";
import logodark from "../assets/img/logo/dark-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logodark} alt="PrizmX dark Logo" className={styles.logo} />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
