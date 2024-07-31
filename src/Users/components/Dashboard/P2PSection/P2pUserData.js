import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/p2p.module.css";

const P2pUserData = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {screenWidth > 768 && (
        <div className={styles.p2pBox}>
          <div className={styles.p2prow}>User Profile Details</div>
        </div>
      )}
    </>
  );
};

export default P2pUserData;
