import React from "react";
import styles from "../home.module.css";
import icon1 from "../assets/img/icons/Paramining-icon.png";
import icon2 from "../assets/img/icons/Proof-of-Stake-icon.png";
import icon3 from "../assets/img/icons/Decentralized-Crypto-iocn.png";

const Usp = () => {
  return (
    <div className={styles.infobox}>
      <div className={styles.uspcard}>
        <figure>
          <img src={icon1} alt="para-mining-icon" className={styles.usp_img} />
        </figure>
        <figcaption>
          <p>Paramining</p>
        </figcaption>
        <div className={styles.figbody}>
          <p>
            Advance cryptocurrency, fully decentralized, self-regulating system
            with unique PARAMINING technology and native Blockchain...
          </p>
        </div>
      </div>
      <div className={styles.uspcard}>
        <figure>
          <img src={icon2} alt="para-mining-icon" className={styles.usp_img} />
        </figure>
        <figcaption>
          <p>Proof of Stake</p>
        </figcaption>
        <div className={styles.figbody}>
          <p>
            PrizmX is 100% Proof of Stake cryptocurrency based on the NEXT core,
            built on the open source Java langauge...
          </p>
        </div>
      </div>
      <div className={styles.uspcard}>
        <figure>
          <img src={icon3} alt="para-mining-icon" className={styles.usp_img} />
        </figure>
        <figcaption>
          <p>Decentralized Crypto</p>
        </figcaption>
        <div className={styles.figbody}>
          <p>
            A new implementation of concept of cryptocurrency in its purest form
            allowing any user to easily, quickly and securly store and transact
            with PRIZM...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usp;
