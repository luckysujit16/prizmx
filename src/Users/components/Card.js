// src/components/Card.js
import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
