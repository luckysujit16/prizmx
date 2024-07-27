import React from "react";
import styles from "../assets/css/footer.module.css";

const DashFooter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={styles.footer}>
          <div className="text-center p-3">
            © 2024 Prizmx Crypto Exchange. All rights reserved. Site Developed &
            Designed by Illuminate Fintech
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashFooter;
