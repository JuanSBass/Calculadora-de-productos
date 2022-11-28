import React from "react";
import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <section className={styles.summarycontainer}>
      <h1>Summary</h1>
      <div className={styles.comandacontainer}>
        <div className={styles.list}>
          <p>Total Items</p>
          <p>
            Total M<sup>2</sup>
          </p>
          <p>Subtotal</p>
          <p>Tax</p>
          <p>
            <b>Total</b>
          </p>
          <p><b>Due Today 50%</b></p>
        </div>
        <div className={styles.resultlist}>
          <p>12</p>
          <p>8.55</p>
          <p>$1.710</p>
          <p>$273.6</p>
          <p><b>$1,983.6</b></p>
          <p><b>$991.8</b></p>
        </div>
      </div>
    </section>
  );
};
