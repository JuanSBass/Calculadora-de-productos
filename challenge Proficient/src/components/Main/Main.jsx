import React from "react";
import { CardItem } from "./CardItem/CardItem";
import styles from "./main.module.css";
import beads from "../../Img/Beads.png";
import desk from "../../Img/Desk.png";
import dining from "../../Img/Dining.png";
import furniture from "../../Img/Furniture.png";
import oven from "../../Img/Oven.png";
import refri from "../../Img/refridegator.png";
import sofa from "../../Img/Sofa.png";
import tv from "../../Img/TV.png";
import wardrobe from "../../Img/Wardrobe.png";
import washer from "../../Img/Washer.png";
import { useState } from "react";
import { Summary } from "./Summary/Summary";
import { Lateralbuttons } from "./Lateralbuttons/Lateralbuttons";

export const Main = () => {
  const [counter, setCounter] = useState({
    Beads: 0,
    Refrigerador: 0,
    Furniture: 0,
    Oven: 0,
    Sofa: 0,
    TV: 0,
    "Washer-dryer": 0,
    Dining: 0,
    Desk: 0,
    Wardrobe: 0
  });
  
  const countIncrement = (e) => {
    console.log(e.target.value);
    setCounter({
      ...counter,
      [e.target.value]: counter[e.target.value]+1
    })
  };
  console.log(counter);

  return (
    <main className={styles.header}>
      <h1>What items to store?</h1>
      <p id={styles.textheader}>
        Select which items you wish to store before moving to your new home.
        We'll keep 'em safe!
      </p>
      <section className={styles.cardscontainer}>
        {arrItems?.map((item) => (
          <div key={item.obj}>
            <CardItem obj={item.obj} img={item.img} />
            <div className={styles.countercontainer}>
              <button className={styles.leftbutton} value={item.obj}>-</button>
              {/* <div className={styles.number}> */}
                <input  name={item.obj} className={styles.number} value={counter[item.obj]}/>
              {/* </div> */}
              <button className={styles.rightbutton} value={item.obj} onClick={countIncrement}>+</button>
            </div>
          </div>
        ))}
      </section>
      <Lateralbuttons />
      <Summary />
    </main>
  );
};

const arrItems = [
  {
    obj: "Beads",
    img: beads,
    valor: 0
  },
  {
    obj: "Refrigerador",
    img: refri,
  },
  {
    obj: "Furniture",
    img: furniture,
  },
  {
    obj: "Oven",
    img: oven,
  },
  {
    obj: "Sofa",
    img: sofa,
  },
  {
    obj: "TV",
    img: tv,
  },
  {
    obj: "Washer-dryer",
    img: washer,
  },
  {
    obj: "Dining",
    img: dining,
  },
  {
    obj: "Desk",
    img: desk,
  },
  {
    obj: "Wardrobe",
    img: wardrobe,
  },
];
