import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../assets/css/p2p.module.css";
// import SiteUrl from "../../../../config/config.json";

const P2pDemand = () => {
  const [buyOrdersArray, setBuyOrdersArray] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  console.log("API URL IN DEMAND", url);

  useEffect(() => {
    axios
      .get(`${url}/orderdata`)
      .then((res) => {
        if (res) {
          setBuyOrdersArray(res.data);
          console.log("Buy Orders Data fetched:", res.data);
        } else {
          console.log("Dashboard Buy Order Data not fetched:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      <div className={styles.p2pcolumn}>
        <div className={styles.p2pcolumnTitle}>User ID</div>
        <div className={styles.p2pcolumnTitle}>Quantity</div>
        <div className={styles.p2pcolumnTitle}>Price</div>
        <div className={styles.p2pcolumnTitle}>Payment Mode</div>
      </div>

      {buyOrdersArray.map((buyOrder) => (
        <div className={styles.p2pdataRow} key={buyOrder.id}>
          <div className={styles.p2pdataColumn}>{buyOrder.userid}</div>
          <div className={styles.p2pdataColumn}>{buyOrder.quantity}</div>
          <div className={styles.p2pdataColumn}>{buyOrder.price}</div>
          <div className={styles.p2pdataColumn}>UPI</div>
        </div>
      ))}
    </>
  );
};

export default P2pDemand;
