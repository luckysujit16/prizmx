// src/Home/Register.js
import React, { useState } from "react";
import axios from "axios";
import styles from "../Register.module.css";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    referralId: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };

  const validateForm = () => {
    let formErrors = {};
    // Validate password strength
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    // Add other validation as needed
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/register",
          formData
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Registration failed");
        console.error(error.response.data); // log error for debugging
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex p-5">
          <div className={styles.logoSection}>
            <img src={imgLogo} alt="Prizm Logo" className={styles.imgLogo} />
          </div>
          <div className={styles.menuSection}>
            <button type="button" className={styles.menuButton}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mx-5 justify-content-center">
          <div className="col-md-4 col-sm-12 my-5 ">
            <div className="row">
              <p className="text-center fs-5 mb-5 fw-semibold text-secondary">
                PrizmX Registration Form
              </p>
            </div>
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="row mb-5">
                  <div className="col-4 p-2">
                    <label className="fs-6">Email</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="email"
                      name="email"
                      placeholder="Please Enter Valid Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="form form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-4 p-2">
                    <label className="fs-6">Password</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="password"
                      placeholder="Please Strong Alpha Numeric Password"
                      value={formData.email}
                      onChange={handleChange}
                      className="form form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-4 p-2">
                    <label className="fs-6">Confirm Password</label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="confirm-password"
                      placeholder="Confirm Password as per above field"
                      value={formData.email}
                      onChange={handleChange}
                      className="form form-control"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
