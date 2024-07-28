import React from "react";
import styles from "../../Users/assets/css/p2p.module.css";
import DashNav from "../components/Dashboard/DashNav";
import DashData from "../components/Dashboard/DashData";
import P2pDemand from "../components/Dashboard/P2pDemand";
import P2pBuy from "../components/Dashboard/P2pBuy";
import P2pSell from "../components/Dashboard/P2pSell";
import P2pSupply from "../components/Dashboard/P2pSupply";
import DashFooter from "../components/Dashboard/DashFooter";

const Dashboard = () => {
  return (
    <>
      <DashNav />
      <DashData />
      <div className="container-fluid">
        <div className="row px-4 pt-3 pb-3">
          <div className={styles.p2pHeader}>
            <div className={styles.p2pTitle}>P2P Order Book</div>
            <div className={styles.p2pCurrency}>
              {/* Example single danger button */}
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Action
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.p2pContainer}>
          <P2pDemand />
          <P2pBuy />
          <P2pSell />
          <P2pSupply />
        </div>
      </div>

      <DashFooter />
    </>
  );
};

export default Dashboard;
