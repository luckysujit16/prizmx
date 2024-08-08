import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/css/wallet.module.css";
import noDataImg from "../../assets/img/no-data.png";
import SiteUrl from "../../../config/config.json";

const CryptoWithdrawal = () => {
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
            <th className="tableH1">Sr. No</th>
            <th className="tableH2">Crypto Name</th>
            <th className="tableH3">Last Transaction #</th>
            <th className="tableH4">Time</th>
            <th className="tableH5">Amount</th>
            <th className="tableH6">Balance</th>
            <th className="tableH7">Wallet Address</th>
            <th className="tableH8">Status</th>
          </thead>
          <tbody className="m-auto p-4 text-center">
            {cryptoData.length > 0 ? (
              cryptoData.map((item, index) => (
                <tr key={index} className={styles.textLeftAlign}>
                  <td className="walletCol1">{index + 1}</td>
                  <td className="walletCol2">
                    {item.name + " | " + item.symbol}
                  </td>
                  <td className="walletCol3">
                    {item.transactionNumber || "No Transaction"}
                  </td>
                  <td className="walletCol4">{item.time || "No Data"}</td>
                  <td className="walletCol5">{item.amount || "0"}</td>
                  <td className="walletCol6">{item.balance || "Nil"} </td>
                  <td className="walletCol7">
                    {item.walletAddress || (
                      <button className={styles.walletButton}>
                        Withdraw {item.symbol}
                      </button>
                    )}
                  </td>

                  <td className="walletCol8">{item.status || "Nil"}</td>
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

export default CryptoWithdrawal;
