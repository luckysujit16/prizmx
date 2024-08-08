import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/css/wallet.module.css";
import noDataImg from "../../assets/img/no-data.png";
import SiteUrl from "../../../config/config.json";

const SwapCrypto = () => {
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
            <th className={styles.walletTableHeader}>Crypto Name</th>
            <th className={styles.walletTableHeader}>Balance</th>
            <th className={styles.walletTableHeader}>Live Price</th>
            <th className={styles.walletTableHeader}>Prizmx Live Price</th>
            <th className={styles.walletTableHeader}>Expected PZMX Amount</th>

            <th className={styles.walletTableHeader}>Wallet Address</th>
            <th className={styles.walletTableHeader}>Status</th>
          </thead>
          <tbody className="m-auto p-4 text-center">
            {cryptoData.length > 0 ? (
              cryptoData.map((item, index) => (
                <tr key={index} className={styles.textLeftAlign}>
                  <td className={styles.textLeftAlign}>
                    {item.name + " | " + item.symbol}
                  </td>
                  <td>{item.balance || "Nil"} </td>
                  <td>{item.livePrice || "No Data"}</td>
                  <td>{item.pzmxLiveRate || "No Data"}</td>
                  <td>
                    <button className={styles.swapButton}>
                      Check Swap Amount
                    </button>
                  </td>

                  <td>
                    {item.walletAddress || (
                      <button className={styles.walletButton}>
                        SWAP {item.symbol} To PZMX
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

export default SwapCrypto;
