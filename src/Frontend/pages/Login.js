// src/Home/Verify.js
import React, { useState } from "react";
import axios from "axios";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../Verify.module.css";

const Verify = () => {
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/verify",
        formData
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Verification failed");
      console.error(error.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex p-5">
          <div className={styles.logoSection}>
            <img
              onClick={(click) => {}}
              src={imgLogo}
              alt="Prizm Logo"
              className={styles.imgLogo}
            />
          </div>
          <div className={styles.menuSection}>
            <button
              onClick={(click) => {
                alert("Register Clicked");
              }}
              type="button"
              className={styles.menuButton}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row px-5">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex my-5 ">
            <div className={styles.formSection}>
              <p className="text-center fs-5 mb-3 fw-semibold text-secondary">
                PrizmX User Login
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="mb-3">
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Email</label>
                    <input
                      type="number"
                      name="verify_otp"
                      onChange={handleChange}
                      className="form form-control text-center"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Password</label>
                    <input
                      type="number"
                      name="verify_otp"
                      onChange={handleChange}
                      className="form form-control text-center"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="p-2 my-4">
                  Login
                </button>
              </form>
            </div>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default Verify;
