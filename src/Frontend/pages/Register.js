import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import styles from "../assets/customCSS.module.css";
import styles1 from "../../Users/assets/css/p2p.module.css";
import imgLogo from "../../Home/assets/img/logo/dark-logo.png";

const Register = ({ register }) => {
  const [searchParams] = useSearchParams();
  const [referralId, setReferralId] = useState("PZMX_369369369"); // default referral ID
  const [formData, setFormData] = useState({
    referred_by: referralId,
    name: '',
    email: '',
    password: '',
    rpassword: ''
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const referral_id = searchParams.get('referral_id');
    if (referral_id) {
      setReferralId(referral_id);
      setFormData((prevFormData) => ({ ...prevFormData, referred_by: referral_id }));
    }
  }, [searchParams]);

  const { name, email, password, rpassword } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== rpassword) {
      toast.error('Passwords do not match');
    } else {
      register({ referred_by: referralId, name, email, password }, (success) => {
        if (success) {
          setRedirect(true);
        }
      });
    }
  };
  


  const newStyles = { ...styles, ...styles1 };

  if (redirect) {
    return <Navigate to="/verify" />;
  }

  return (
    <>
      <div className={newStyles.rowBothSidePadding}>
        <div className={newStyles.twoColumnRow}>
          <div className={newStyles.logoSection}>
            <Link to="/" >
              <img
                name="Logo"
                src={imgLogo}
                style={{ cursor: "pointer" }}
                alt="Prizm Logo"
                className={newStyles.imgLogo}
              />
            </Link>
          </div>
          <div className={newStyles.menuSection}>
            <Link to="/login">
              <button
                name="Login"
                type="button"
                className={newStyles.menuButton}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className={newStyles.formSection}>
            <p className="text-center fs-5 mb-3 fw-semibold text-secondary">
              PrizmX Registration
            </p>

            <form onSubmit={onSubmit} className={newStyles.form}>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Referral Id</label>
                </div>
                <div className={newStyles.formField}>
                  <input
                    type="text"
                    name="referred_by"
                    value={referralId}
                    onChange={onChange}
                    className="form form-control"
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Name</label>
                </div>
                <div className={newStyles.formField}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Please Enter Valid Name"
                    value={name}
                    onChange={onChange}
                    className="form form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Email</label>
                </div>
                <div className={newStyles.formField}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Please Enter Valid Email Address"
                    value={email}
                    onChange={onChange}
                    className="form form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Password</label>
                </div>
                <div className={newStyles.formField}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Please Enter Strong Alpha Numeric Password"
                    value={password}
                    onChange={onChange}
                    className="form form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className={newStyles.formField}>
                  <label className="fs-6 pb-3">Confirm Password</label>
                </div>
                <div className={newStyles.formField}>
                  <input
                    type="password"
                    name="rpassword"
                    placeholder="Confirm Password as per above field"
                    value={rpassword}
                    onChange={onChange}
                    className="form form-control"
                    required
                  />
                </div>
              </div>
              <button
                name="Register"
                type="submit"
                className="p-2 my-4"
              >
                Register
              </button>
              <Link to="/" className={newStyles.formlink}>
                Back To PrizmX
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);

