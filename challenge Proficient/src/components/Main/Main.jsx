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
import line1 from "../../Img/Line 2.png";

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
    Wardrobe: 0,
    totalItems: 0,
    m2totales: 0,
    subtotal: 0,
    tax: 0,
    total: 0,
    dueToday: 0,
  });

  let subtotal = (counter.m2totales * 200).toFixed(2);
  let tax = (16 / 100) * counter.subtotal;
  let total = ((counter.m2totales * 200) + tax).toFixed(2)
  let dueToday = (((counter.m2totales * 200) + tax) / 2).toFixed(2);

  if(counter.totalItems === 0) {
    subtotal = 0;
    tax = 0;
    total = 0;
    dueToday = 0;
    counter.m2totales = 0;
  }
  

  const countDecrement = async (e) => {
    setCounter({
      ...counter,
      [e.target.value]: counter[e.target.value] - 1,
      totalItems: counter.totalItems - 1,
      m2totales: counter.m2totales - Number(e.target.id),
      subtotal: counter.m2totales * 200,
      tax: counter.subtotal * 0.16,
      total: counter.subtotal + counter.tax,
      dueToday: counter.total / 2,
    });
    
  };


  const countIncrement = (e) => {
    setCounter({
      ...counter,
      [e.target.value]: counter[e.target.value] + 1,
      totalItems: counter.totalItems + 1,
      m2totales: counter.m2totales + Number(e.target.id),
      subtotal: counter.m2totales * 200,
      tax: counter.subtotal * 0.16,
      total: counter.subtotal + counter.tax,
      dueToday: counter.total / 2,
    });
  };

  const clear = () => {
    setCounter({
      Beads: 0,
    Refrigerador: 0,
    Furniture: 0,
    Oven: 0,
    Sofa: 0,
    TV: 0,
    "Washer-dryer": 0,
    Dining: 0,
    Desk: 0,
    Wardrobe: 0,
    totalItems: 0,
    m2totales: 0,
    subtotal: 0,
    tax: 0,
    total: 0,
    dueToday: 0,
    })
  };
  // console.log(counter);

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
              <button
                className={styles.leftbutton}
                value={item.obj}
                onClick={countDecrement}
                disabled={counter[item.obj] === 0}
                id={item.valor}
              >
                <img src={line1} alt="" />
              </button>
              <input
                name={item.obj}
                className={styles.number}
                value={counter[item.obj]}
                readOnly="on"
              />
              <button
                className={styles.rightbutton}
                value={item.obj}
                onClick={countIncrement}
                id={item.valor}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </section>
      <Lateralbuttons 
      clear={clear}
      />
      <Summary
        totalItems={counter.totalItems}
        m2totales={counter.m2totales.toFixed(2)}
        subtotal={subtotal}
        tax={tax.toFixed(2)}
        total={total}
        dueToday={dueToday}
      />
    </main>
  );
};

const arrItems = [
  {
    obj: "Beads",
    img: beads,
    valor: 1.2,
  },
  {
    obj: "Refrigerador",
    img: refri,
    valor: 1,
  },
  {
    obj: "Furniture",
    img: furniture,
    valor: 0.5,
  },
  {
    obj: "Oven",
    img: oven,
    valor: 0.6,
  },
  {
    obj: "Sofa",
    img: sofa,
    valor: 1.5,
  },
  {
    obj: "TV",
    img: tv,
    valor: 0.25,
  },
  {
    obj: "Washer-dryer",
    img: washer,
    valor: 0.5,
  },
  {
    obj: "Dining",
    img: dining,
    valor: 2,
  },
  {
    obj: "Desk",
    img: desk,
    valor: 0.75,
  },
  {
    obj: "Wardrobe",
    img: wardrobe,
    valor: 3.2,
  },
];
