import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/p2p.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SiteUrl from "../../../../config/config.json";

const P2pHeader = () => {
  const [currData, setCurrData] = useState([]);
<<<<<<< HEAD
  const url = process.env.REACT_APP_API_URL;
=======
  const url = SiteUrl.SiteUrl;
  
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f

  useEffect(() => {
    axios
      .get(`${url}/currencydata`)
      .then((res) => {
        if (res) {
          setCurrData(Object.values(res.data[0]));
          console.log("Currency Data fetched:", res.data[0]);
        } else {
          console.log("Currency Data not fetched:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={styles.p2pHeader}>
          <div className={styles.p2pTitle}>P2P Order Book</div>
          <div className={styles.p2pCurrency}>
            <div className="dropdown">
              <button
                type="button"
                className="btn border-1 dropdown-toggle fs-6"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={styles.currencyDropMenuTitle}>
                  Fiat Currency
                </span>
              </button>
              <ul className="dropdown-menu">
                {currData.map((c, index) => (
                  <li key={index}>
                    <Link to={"/"} className="dropdown-item text-wrap">
                      <div className={styles.currencyli}>
                        <div>{c.currencyLogo}</div>
                        <div className={styles.flag}>
                          <img src={c.flagUrl} alt="flag-logo" />
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2pHeader;
