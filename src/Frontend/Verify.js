// src/Home/Verify.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./Verify.module.css";

const Verify = () => {
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

  return (
    <div className={styles.container}>
      <h2>Verify Email</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Verification Code</label>
          <input
            type="text"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Verify;
