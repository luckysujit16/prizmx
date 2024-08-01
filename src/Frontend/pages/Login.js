// src/Home/Verify.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";

const Verify = () => {
  const newStyles = { ...styles, ...styles1 };
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

  let navigate = useNavigate();
  const routeChange = (path) => {
    const { name, value } = path.target;

    console.log("Entered routeChange Name = ", +name + " Value " + value);
    switch (value) {
      case "register":
        navigate("/register");
        break;
      case "verify":
        navigate("/verify");
        break;
      // Add more cases as needed
      default:
        navigate("/");
        break;
    }
  };

  return (
    <>
      <div className={newStyles.rowBothSidePadding}>
        <div className={newStyles.twoColumnRow}>
          <div className={newStyles.logoSection}>
            <img
              onClick={routeChange}
              name="Logo"
              value="/"
              src={imgLogo}
              alt="Prizm Logo"
              className={newStyles.imgLogo}
            />
          </div>
          <div className={newStyles.menuSection}>
            <button
              onClick={routeChange}
              name="Login"
              value="login"
              type="button"
              className={newStyles.menuButton}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
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

              <button
                name="login"
                onClick={routeChange}
                value="verify"
                type="submit"
                className="p-2 my-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Verify;
