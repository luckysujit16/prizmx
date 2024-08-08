import React from "react";
import { Link } from "react-router-dom";
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
      <div className="row px-5 py-5">
        <div className="col-lg-4 col-sm-12 col-xs-12 py-3">
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
        <div className="col-lg-8 col-sm-12 col-xs-12">
          <div className={styles.contact_info}>
            <div className={styles.contact_email}>
              <Link to="mailto:info@prizmxchange.com">
                info@prizmxchange.com
              </Link>
            </div>
            <div className={styles.contact_hours}>
              Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED
            </div>
          </div>
          <div className={styles.contact_social}>
            <Link to="#" className={styles.social_icon}>
              <FaFacebookF />
            </Link>
            <Link to="#" className={styles.social_icon}>
              <FaInstagram />
            </Link>
            <Link to="#" className={styles.social_icon}>
              <FaLinkedinIn />
            </Link>
            <Link to="#" className={styles.social_icon}>
              <FaTelegramPlane />
            </Link>
          </div>

          <nav className={styles.contact_nav}>
            <Link to="#" className={styles.nav_link}>
              Features
            </Link>
            <Link to="#" className={styles.nav_link}>
              Future
            </Link>
            <Link to="#" className={styles.nav_link}>
              Paramining
            </Link>
            <Link to="#" className={styles.nav_link}>
              Paramining Factor
            </Link>
            <Link to="#" className={styles.nav_link}>
              Register
            </Link>
            <Link to="#" className={styles.nav_link}>
              WhitePaper
            </Link>
            <Link to="#" className={styles.nav_link}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Contact;
