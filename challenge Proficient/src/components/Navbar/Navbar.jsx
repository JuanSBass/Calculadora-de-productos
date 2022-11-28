import React from "react";
import styles from "./navbar.module.css";
import house from "../../Img/VectorHouse.png";
import windowVector from "../../Img/window.png"

export const Navbar = () => {
  return (
    <section className={styles.navcontainer}>
      <div className={styles.house}>
        {/* <div className={styles.house}> */}
          <img src={house} alt="house" />
          <img src={windowVector} alt="window" id={styles.window} />
        {/* </div> */}
        </div>
        <div className={styles.words}>
          <a>How We Work</a>
          <a>Services</a>
          <a>Free Quote</a>
          <a>Contact</a>
      </div>
    </section>
  );
};
