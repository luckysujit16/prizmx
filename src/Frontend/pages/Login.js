// src/Home/Verify.js
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const newStyles = { ...styles, ...styles1 };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
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
            <Link to="/" >
              <img
                value="/"
                src={imgLogo}
                alt="Prizm Logo"
                className={newStyles.imgLogo}
              />
            </Link>
          </div>
          <div className={newStyles.menuSection}>
            <Link to="/register" >
              <button
                name="Registration"
                value="register"
                type="button"
                className={newStyles.menuButton}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={newStyles.formSection}>
            <p className="text-center fs-5 mb-3 fw-semibold text-secondary">
              PrizmX User Login
            </p>


            <form onSubmit={onSubmit} className={newStyles.form}>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    className="form form-control text-center"
                    required
                  />
                </div>

              </div>
              <div className={newStyles.formField}>
                <label className="fs-6 pb-3">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={onChange}
                  className="form form-control text-center"
                  required
                />
              </div>

              <button
                name="login"
                value="verify"
                type="submit"
                className="p-2 my-4"
              >
                Login
              </button>
            </form>

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
