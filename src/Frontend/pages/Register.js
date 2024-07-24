// src/Home/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();
  const routeChange = (path) => {
    const { name, value } = path.target;

    console.log("Entered routeChange Name = ", +name + " Value " + value);
    switch (value) {
      case "login":
        navigate("/login");
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
      <div className="container-fluid ">
        <div className="row d-flex p-5">
          <div className={styles.logoSection}>
            <img
              onClick={routeChange}
              name="Logo"
              value="/"
              src={imgLogo}
              alt="Prizm Logo"
              className={styles.imgLogo}
            />
          </div>
          <div className={styles.menuSection}>
            <button
              onClick={routeChange}
              name="Login"
              value="login"
              type="button"
              className={styles.menuButton}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row px-5">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex my-5 ">
            <div className={styles.formSection}>
              <p className="text-center fs-5 mb-3 fw-semibold text-secondary">
                PrizmX Registration Form
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="mb-3">
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Email</label>
                  </div>
                  <div className={styles.formField}>
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
                <div className="mb-3">
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Password</label>
                  </div>
                  <div className={styles.formField}>
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
                <div className="mb-3">
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Confirm Password</label>
                  </div>
                  <div className={styles.formField}>
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
                <button
                  onClick={routeChange}
                  value="verify"
                  name="Register"
                  type="submit"
                  className="p-2 my-4"
                >
                  Register
                </button>
                <a href="/" className={styles.formlink}>
                  Back To PrizmX
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
