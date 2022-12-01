import React from "react";
import styles from "./summary.module.css";

export const Summary = ({
  totalItems,
  m2totales,
  subtotal,
  tax,
  total,
  dueToday,
}) => {
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
          <p>
            <b>Due Today 50%</b>
          </p>
        </div>
        <div className={styles.resultlist}>
          <p>{totalItems}</p>
          <p>{m2totales}</p>
          <p>{subtotal}</p>
          <p>${tax}</p>
          <p>
            <b>${total}</b>
          </p>
          <p>
            <b>${dueToday}</b>
          </p>
        </div>
      </div>
    </section>
  );
};
