// src/Home/Login.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../../Users/assets/css/p2p.module.css";
import styles1 from "../assets/customCSS.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

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
            <img src={imgLogo} alt="Prizm Logo" className={newStyles.imgLogo} />
          </div>
          <div className={newStyles.menuSection}>
            <button
              name="Registration"
              value="register"
              type="button"
              className={newStyles.menuButton}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="contianer-fluid mt-5">
        <p className="text-center">PrizmX User Login</p>
        <div className={newStyles.formSection}>
          <form onSubmit={onSubmit} className={newStyles.form}>
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

            <button name="login" type="submit" className="p-2 my-4">
              Login
            </button>
          </form>
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
