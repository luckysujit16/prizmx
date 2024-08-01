// src/Home/Verify.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";

<<<<<<< HEAD
const Verify = () => {
  const newStyles = { ...styles, ...styles1 };
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });
  const [message, setMessage] = useState("");
=======
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/user" />;
  }


  return (
    <>
      <div className={newStyles.rowBothSidePadding}>
        <div className={newStyles.twoColumnRow}>
          <div className={newStyles.logoSection}>
            <img
<<<<<<< HEAD
              onClick={routeChange}
              name="Logo"
=======
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f
              value="/"
              src={imgLogo}
              alt="Prizm Logo"
              className={newStyles.imgLogo}
            />
          </div>
          <div className={newStyles.menuSection}>
            <button
<<<<<<< HEAD
              onClick={routeChange}
              name="Login"
              value="login"
=======
              name="Registration"
              value="register"
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f
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

<<<<<<< HEAD
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
=======
              <form onSubmit={onSubmit} className={styles.form}>
                <div className="mb-3">
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      className="form form-control text-center"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className="fs-6 pb-3">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={onChange}
                      className="form form-control text-center"
                      required
                    />
                  </div>
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f
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

<<<<<<< HEAD
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
=======
                <button
                  name="login"
                  type="submit"
                  className="p-2 my-4"
                >
                  Login
                </button>
              </form>
            </div>
>>>>>>> 8d3257c16d29d3c7f0ef11c9b4e50561d3662e7f
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

