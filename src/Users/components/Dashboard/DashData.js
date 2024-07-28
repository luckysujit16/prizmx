import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/css/dashboard.module.css";

// Function to dynamically import images
const importAll = (r) => {
  let images = {}; // eslint-disable-line
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../assets/img/icons", false, /\.(png|jpe?g|svg)$/)
);

const DashData = () => {
  const [dashboardData, setDashboardData] = useState([]);

  const url = process.env.REACT_APP_DASH_DATA_URL;

  useEffect(() => {
    axios
      .get(`${url}/dashboardData`)
      .then((res) => {
        if (res) {
          setDashboardData(res.data);
          console.log("Dashboard Data fetched:", res.data);
        } else {
          console.log("Dashboard Data not fetched:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="container-fluid">
      <div className="row px-5">
        <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardData}>
              {dashboardData.map((data, index) => (
                <figure key={data.id}>
                  <img
                    src={
                      images[data.image.replace("../../assets/img/icons/", "")]
                    }
                    alt={data.name}
                    id="icon"
                    onError={(e) => {
                      e.target.src = "../../assets/img/icons/small_logo.ico";
                    }} // Fallback image
                  />
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
