import React from "react";
import styles from "../home.module.css";
import paramining from "../assets/img/paramining-1.jpg";

const ParaminingFactor = () => {
  return (
    <div className={styles.para_section}>
      <div className="container-fluid">
        <div className="row px-5">
          <div className={styles.title}>Paramining Factor</div>
          <img
            src={paramining}
            alt="paramining banner"
            className={styles.paramining_banner}
          />
        </div>
        <div className="row px-5">
          <div className="col-lg-6 col-sm-12 col-xs-12 py-3">
            <div className={styles.para_title}>Paramining system</div>
            <p className={styles.para_text}>
              The Paramining system is the most advanced tool for promotion and
              popularization, as it has no analogues in any modern
              cryptocurrency. The main advantage of Paramining is that no
              network user can interfere with this mechanism and falsify new
              coins, all users can track the number of coins issued by the
              system in real time. Paramining works on any wallet with a balance
              over 1 PZMX and automatically stops when the balance reaches
              1,000,000 PZMX.
            </p>
            <div className={styles.highlight_text}>
              The rate at which new coins are generated depends on personal
              balance
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12 py-3">
            <div className={styles.para_title}>PARAMINING FACTOR</div>
            <div className={styles.para_text}>
              New coin generation rate factors:
            </div>
            <div className={styles.para_text}>1. Personal balance</div>
            <div className={styles.para_text}>
              2. Number of coins in the system
            </div>
            <div className={styles.para_text}>
              3. Number of users in the system
            </div>
            <div className={styles.para_text_bold}>
              A three- factor source of increasing the number of coins in your
              wallet.
            </div>
            <div className={styles.para_text}>
              The speed of mining new coins depends on the number of coins in
              the wallet, the more cryptocurrencies, the higher the speed of
              paramining, the higher your profitability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaminingFactor;
