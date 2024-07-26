import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import icon1 from "../assets/img/icons/total-supply-1.png";
import styles from "../assets/css/Dashboard.module.css";

const DashData = () => {
  const [dashboardData, setdashData] = useState([]);
  const url = process.env.REACT_APP_DASH_DATA_URL;

  // console.log(process.env.REACT_APP_DASH_DATA_URL);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdashData(res.data);
        console.log("Dashboard Data fetched:", dashboardData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardData}>
              {dashboardData.map((data) => (
                <figure key={data.id}>
                  <img src={icon1} alt="total-coins" id="icon" />
                  <p className={styles.dashboardTitle}>{data.name}</p>
                  <figcaption>{data.data}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashData;
