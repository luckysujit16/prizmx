import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../assets/css/p2p.module.css";

const P2pSupply = () => {
  const [buyOrdersArray, setBuyOrdersArray] = useState([]);

  const url = process.env.REACT_APP_API_URL;

  console.log("API URL IN DEMAND", url);

  useEffect(() => {
    axios
      .get(`${url}/orderdata`)
      .then((res) => {
        if (res) {
          setBuyOrdersArray(res.data);
          console.log("Sell Orders Data fetched:", res.data);
        } else {
          console.log("Dashboard Sell Order Data not fetched:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <div className={styles.p2pcolumn}>
        <div className={styles.p2pcolumnTitle}>User ID</div>
        <div className={styles.p2pcolumnTitle}>Quantity</div>
        <div className={styles.p2pcolumnTitle}>Price</div>
        <div className={styles.p2pcolumnTitle}>Payment Mode</div>
      </div>
      {buyOrdersArray.map((buyOrder, index) => (
        <div key={index++}>
          <div className={styles.p2pdataRow}>
            <div className={styles.p2pdataColumn}>{buyOrder.userid}</div>
            <div className={styles.p2pdataColumn}>{buyOrder.quantity}</div>
            <div className={styles.p2pdataColumn}>{buyOrder.price}</div>
            <div className={styles.p2pdataColumn}>UPI</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default P2pSupply;
