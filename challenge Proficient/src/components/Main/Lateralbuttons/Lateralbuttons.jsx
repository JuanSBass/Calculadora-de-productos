import React from 'react'
import styles from "./lateralbuttons.module.css"

export const Lateralbuttons = () => {
  return (
    <div className={styles.lateralbtnscontainer}>
      <button id={styles.clearbtn}>Clear</button>
      <button id={styles.calculatebtn}>Calculate</button>
    </div>
  )
}
