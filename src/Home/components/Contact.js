import React from "react";
import logo from "../assets/img/logo/dark-logo.png"; // Adjust the path as necessary
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import styles from "./Contact.module.css"; // Custom CSS for additional styling

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div class="row px-5 py-5">
        <div class="col-lg-4 col-sm-12 col-xs-12 py-3">
          <div className={styles.contact_header}>
            <img
              src={logo}
              alt="PrizmXchange Logo"
              className={styles.contact_logo}
            />
            <p className={styles.contact_description}>
              PARAMINE PRIZM in P2P Exchange wallet and have full control over
              PRIZM price by trading them P2P.
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-sm-12 col-xs-12">
          <div className={styles.contact_info}>
            <div className={styles.contact_email}>
              <a href="mailto:info@prizmxchange.com">info@prizmxchange.com</a>
            </div>
            <div className={styles.contact_hours}>
              Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED
            </div>
          </div>
          <div className={styles.contact_social}>
            <a href="#" className={styles.social_icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaInstagram />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.social_icon}>
              <FaTelegramPlane />
            </a>
          </div>

          <nav className={styles.contact_nav}>
            <a href="#" className={styles.nav_link}>
              Features
            </a>
            <a href="#" className={styles.nav_link}>
              Future
            </a>
            <a href="#" className={styles.nav_link}>
              Paramining
            </a>
            <a href="#" className={styles.nav_link}>
              Paramining Factor
            </a>
            <a href="#" className={styles.nav_link}>
              Register
            </a>
            <a href="#" className={styles.nav_link}>
              WhitePaper
            </a>
            <a href="#" className={styles.nav_link}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Contact;
