"use client";
import React, { useState } from "react";
import red from "./images/red.png";
import styles from "../../styles/Card.module.scss";

const Card = () => {
  const [radioButtonColor, SetRadioButtonColor] = useState("red");

  const switchFunction = (color: string): void => {
    SetRadioButtonColor(color);
  };

  const renderImage = () => {
    switch (radioButtonColor) {
      case "red":
        return <img src={red.src} alt="" />;
      case "yellow":
        return <div className={styles.yellowImage}></div>;
      case "blue":
        return <div className={styles.blueImage}></div>;
      default:
        return <img src={red.src} alt="" />;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {renderImage()}
        <h1 className={styles.costs}>$100</h1>
        <h2 className={styles.title}>Zebronics head phone</h2>
        <p className={styles.text}>
          A portable headphone with a battery life of 20 hours and IP67 rating.
          Comes with a 3 years warranty.
        </p>
        <p className={styles.secondText}>Choose your color</p>
        <div className={styles.radioButContainer}>
          <label htmlFor="red">
            <input
              id="red"
              type="radio"
              name="switch"
              className={styles.redRadio}
              onChange={() => switchFunction("red")}
            />
            <span className={styles.redFakeElement}></span>
          </label>

          <label htmlFor="yellow">
            <input
              id="yellow"
              type="radio"
              name="switch"
              onChange={() => switchFunction("yellow")}
            />
            <span className={styles.yellowFakeElement}></span>
          </label>

          <label htmlFor="blue">
            <input
              id="blue"
              type="radio"
              name="switch"
              onChange={() => switchFunction("blue")}
            />
            <span className={styles.blueFakeElement}></span>
          </label>
        </div>
        <button className={styles.addButton}>Add to cart</button>
        <button className={styles.buyButton}>Buy now</button>
        <a href="#">Read reviews</a>
      </div>
    </div>
  );
};

export default Card;
