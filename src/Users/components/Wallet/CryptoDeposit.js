import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/css/wallet.module.css";
import noDataImg from "../../assets/img/no-data.png";
import SiteUrl from "../../../config/config.json";

const CryptoDeposit = () => {
  const [cryptoData, setcryptoData] = useState([]);
  const url = SiteUrl.SiteUrl;

  useEffect(() => {
    axios
      .get(`${url}/currencies`)
      .then((res) => {
        if (res) {
          setcryptoData(res.data);
          console.log("Wallet Crypto Currency List Data fetched:", res.data);
        } else {
          console.log(
            "Wallet Crypto Currency List Data not fetched:",
            res.data
          );
        }
      })
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <div className={styles.walletBox}>
      <div className="table-responsive-lg">
        <table className="table table-striped table-bordered">
          <thead className="table table-dark text-bg-dark ">
            <th className={styles.walletTableHeader}>Sr. No</th>
            <th className={styles.walletTableHeader}>Crypto Name</th>
            <th className={styles.walletTableHeader}>Last Transaction #</th>
            <th className={styles.walletTableHeader}>Time</th>
            <th className={styles.walletTableHeader}>Amount</th>
            <th className={styles.walletTableHeader}>Balance</th>
            <th className={styles.walletTableHeader}>Wallet Address</th>
            <th className={styles.walletTableHeader}>Status</th>
          </thead>
          <tbody className="m-auto p-4 text-center">
            {cryptoData.length > 0 ? (
              cryptoData.map((item, index) => (
                <tr key={index} className={styles.textLeftAlign}>
                  <td>{index + 1}</td>
                  <td className={styles.textLeftAlign}>
                    {item.name + " | " + item.symbol}
                  </td>
                  <td>{item.transactionNumber || "No Transaction"}</td>
                  <td>{item.time || "No Data"}</td>
                  <td>{item.amount || "0"}</td>
                  <td>{item.balance || "Nil"} </td>
                  <td>
                    {item.walletAddress || (
                      <button type="button" className={styles.walletButton}>
                        Generate {item.symbol} Wallet
                      </button>
                    )}
                  </td>

                  <td>{item.status || "Nil"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">
                  <p className="fs-5 fw-semibold">No Transaction Data Yet..</p>
                  <img
                    src={noDataImg}
                    alt="No-Deposit_data"
                    className={styles.noDataImg}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoDeposit;
