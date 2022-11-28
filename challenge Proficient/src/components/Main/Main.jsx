import React from 'react';
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.header}>
      <h1>What items to store?</h1>
      <p>Select which items you wish to store before moving to your new home. We'll keep 'em safe!</p>
    </div>
  )
}


