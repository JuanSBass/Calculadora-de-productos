import React from "react";
import styles from "./carditem.module.css";

export const CardItem = ({ obj, img }) => {
  return (
    <div className={styles.cardicon}>
      <div className={styles.content}>
        <img src={img} alt={obj} />
        <h3>{obj}</h3>
      </div>
    </div>
  );
};
