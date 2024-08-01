// src/Home/Verify.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../Verify.module.css";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

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
      <div className="container-fluid ">
        <div className="row d-flex p-5">
          <div className={styles.logoSection}>
            <img
              value="/"
              src={imgLogo}
              alt="Prizm Logo"
              className={styles.imgLogo}
            />
          </div>
          <div className={styles.menuSection}>
            <button
              name="Registration"
              value="register"
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
                </div>

                <button
                  name="login"
                  type="submit"
                  className="p-2 my-4"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
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

