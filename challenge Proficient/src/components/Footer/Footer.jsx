import React from "react";
import styles from "./footer.module.css";
import house from "../../Img/VectorHouse.png";
import windowVector from "../../Img/window.png";
import circle from "../../Img/Circle.png";
import facebook from "../../Img/021-facebook.png";
import twitter from "../../Img/043-twitter.png";
import instagram from "../../Img/025-instagram.png";
import { FaWhatsapp } from "react-icons/fa"

export const Footer = () => {
  return (
    <section className={styles.footerbox}>
      <div className={styles.footercontainer}>
        <div className={styles.housefooter}>
          <img src={house} alt="house" />
          <img src={windowVector} alt="windowv" id={styles.window} />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page whenters.
          </p>
          <div className={styles.socialicons}>
            {socialicons.map((icon) => (
              <div key={icon} className={styles.iconcircle}>
                <img src={circle} alt="circle" />
                <img src={icon} alt="icon" className={styles.icon} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.pags}>
          <h2>About Us</h2>
          <a>About</a>
          <a>Privacy & Policy</a>
          <a>Terms & Conditions</a>
          <a>Faq</a>
        </div>
        <div className={styles.pags}>
          <h2>Navigate</h2>
          <a>How We Work</a>
          <a>Services</a>
          <a>Faq</a>
          <a>Contact</a>
          <a>Free Quote</a>
        </div>
        <div className={styles.pagscontact}>
          <h2>Contact Us</h2>
          <p>Ricardo Margain 444</p>
          <p>Call: +52 81 1234 5678</p>
          <p>Email: info@challenge.com</p>
          <button id={styles.wapp}>
            <FaWhatsapp className="mr-2 h-5 w-5" id={styles.iconwapp}/>
            <span>WhatsApp</span> 
          </button>
        </div>
      </div>
    </section>
  );
};

const socialicons = [twitter, facebook, instagram];
