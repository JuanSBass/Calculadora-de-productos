import React from 'react'
import styles from "./lateralbuttons.module.css"

export const Lateralbuttons = ({clear}) => {
  return (
    <div className={styles.lateralbtnscontainer}>
      <button id={styles.clearbtn} onClick={clear}>Clear</button>
      <button id={styles.calculatebtn}>Calculate</button>
    </div>
  )
}
