import React from "react";
import styles from "../../assets/css/wallet.module.css";
import noDataImg from "../../assets/img/no-data.png";

const DepositReport = () => {
  return (
    <div className="table-responsive-lg">
      <table className="table">
        <thead className="table table-dark text-bg-dark ">
          <th className={styles.walletTableHeader}>Sr. No</th>
          <th className={styles.walletTableHeader}>Crypto</th>
          <th className={styles.walletTableHeader}>Wallet Address</th>
          <th className={styles.walletTableHeader}>Transaction #</th>
          <th className={styles.walletTableHeader}>Time</th>
          <th className={styles.walletTableHeader}>Amount</th>
          <th className={styles.walletTableHeader}>Status</th>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <td colspan="7">
              <p className="fs-5 fw-semibold">No Deposit Data Yet..</p>
              <img
                src={noDataImg}
                alt="No-Deposit_data"
                className={styles.noDataImg}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepositReport;
