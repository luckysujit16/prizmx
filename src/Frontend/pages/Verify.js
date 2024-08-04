// src/Home/Verify.js
import React, { useState } from "react";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";
import { verifyOtp } from '../../actions/auth';

const Verify = ({ verifyOtp, isAuthenticated }) => {
  const newStyles = { ...styles, ...styles1 };
  const [formData, setFormData] = useState({ otp: 0 });

  const { otp } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    verifyOtp(otp);
  };
  if (isAuthenticated) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={newStyles.logoSection}>
            <img
              name="Logo"
              value="/"
              src={imgLogo}
              alt="Prizm Logo"
              className={newStyles.imgLogo}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={newStyles.formSection}>
            <p className="text-center fs-5 mb-3 fw-semibold text-secondary">
              Verify OTP
            </p>

            <form onSubmit={onSubmit} className={newStyles.form}>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <input
                    type="number"
                    name="otp"
                    onChange={onChange}
                    className="form form-control text-center"
                    required
                  />
                </div>
              </div>

              <button
                name="otp_verify"
                value="dashboard"
                type="submit"
                className="p-2 my-4"
              >
                Submit OTP
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

Verify.propTypes = {
  verifyOtp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { verifyOtp })(Verify);
