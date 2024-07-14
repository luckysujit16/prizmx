// src/Home/Register.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

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
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Referral ID (optional)</label>
          <input
            type="text"
            name="referralId"
            value={formData.referralId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
