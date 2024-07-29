<<<<<<< HEAD
import React,{useState, useEffect} from "react";
import axios from "axios";
import styles from "../../assets/css/p2p.module.css";
import SiteUrl from '../../../config/config.json';

=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../assets/css/p2p.module.css";
import SiteUrl from "../../../config/config.json";
>>>>>>> bb48ec79b1551df2d3ce4e6a753b859c4c8b1407

const P2pSupply = () => {
  const [buyOrdersArray, setBuyOrdersArray] = useState([]);

  const url = SiteUrl.SiteUrl;

  // console.log(url);

  useEffect(() => {
    axios
      .get(`${url}/orderdata`)
      .then((res) => {
        if (res) {
          setBuyOrdersArray(res.data);
          console.log("Sell Orders Data fetched:", res.data);
        } else {
          console.log("Dashboard Sell Order Data not fetched:", buyOrdersArray);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <div className={styles.p2pDemandBox}>
        <div className={styles.p2pOrderBookTitle}>Sell Orders</div>

        <div className={styles.p2pcolumn}>
          <div className={styles.p2pcolumnTitle}>User ID</div>
          <div className={styles.p2pcolumnTitle}>Quantity</div>
          <div className={styles.p2pcolumnTitle}>Price</div>
          <div className={styles.p2pcolumnTitle}>Payment Mode</div>
        </div>
<<<<<<< HEAD
        {buyOrdersArray.map((buyOrder, index) => (
          <div key={index++}>
=======
        {buyOrdersArray.map((buyOrder) => (
          <div key={buyOrder.id}>
>>>>>>> bb48ec79b1551df2d3ce4e6a753b859c4c8b1407
            <div className={styles.p2pdataRow}>
              <div className={styles.p2pdataColumn}>{buyOrder.userid}</div>
              <div className={styles.p2pdataColumn}>{buyOrder.quantity}</div>
              <div className={styles.p2pdataColumn}>{buyOrder.price}</div>
              <div className={styles.p2pdataColumn}>UPI</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default P2pSupply;
