import React from 'react';
import { CardItem } from './CardItem/CardItem';
import styles from "./main.module.css";
import beads from "../../Img/Beads.png";
import desk from "../../Img/Desk.png";
import dining from "../../Img/Dining.png";
import furniture from "../../Img/Furniture.png";
import oven from "../../Img/Oven.png"
import refri from "../../Img/refridegator.png";
import sofa from "../../Img/Sofa.png";
import tv from "../../Img/TV.png";
import wardrobe from "../../Img/Wardrobe.png";
import washer from "../../Img/Washer.png";

export const Main = () => {
  return (
    <main className={styles.header}>
      <h1>What items to store?</h1>
      <p>Select which items you wish to store before moving to your new home. We'll keep 'em safe!</p>
      <section className={styles.cardscontainer}>
        {
          arrItems?.map(item => (
            <CardItem obj={item.obj} img={item.img}/>
          ))
        }
      </section>
    </main>
  )
}

const arrItems = [
  {
    obj: "Beads",
    img: beads
  },
  {
    obj: "Refrigerador",
    img: refri
  },
  {
    obj: "Furniture",
    img: furniture
  },
  {
    obj: "Oven",
    img: oven
  },
  {
    obj: "Sofa",
    img: sofa
  },
  {
    obj: "TV",
    img: tv
  },
  {
    obj: "Washer-dryer",
    img: washer
  },
  {
    obj: "Dining",
    img: dining
  },
  {
    obj: "Desk",
    img: desk
  },
  {
    obj: "Wardrobe",
    img: wardrobe
  },
]

