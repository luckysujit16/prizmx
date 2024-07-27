import React from "react";
import styles from "../home.module.css";
import ad1 from "../assets/img/news/ad1.jpg";
import ad2 from "../assets/img/news/ad2.jpg";
import ad3 from "../assets/img/news/ad3.jpg";
import ad4 from "../assets/img/news/ad4.jpg";
import ad5 from "../assets/img/news/ad5.jpg";
import ad6 from "../assets/img/news/ad6.jpg";
import ad7 from "../assets/img/news/ad7.jpg";
import ad8 from "../assets/img/news/ad8.jpg";
import ad9 from "../assets/img/news/ad9.jpg";
import adx from "../assets/img/news/adx.jpg";
import "./Carousel.module.css";

const PressNMedia = () => {
  const sliederButton = () => {
    const prev = document.getElementById("prev-btn");
    const next = document.getElementById("next-btn");
    const list = document.getElementById("item-list");
    const itemWidth = 325;
    const padding = 50;
    if (prev) {
      prev.addEventListener("click", () => {
        console.log("Prev Button");
        list.scrollLeft -= itemWidth + padding;
      });
    }
    if (next) {
      next.addEventListener("click", () => {
        console.log("Next Button");
        list.scrollLeft += itemWidth + padding;
      });
    }
  };

  return (
    <div className={styles.PressNMedia}>
      <div className="container-fluid">
        <div className="row px-5">
          <div className={styles.title}>PRIZMX PRESS & MEDIA</div>
        </div>
        <div className="row px-5">
          <button
            type="button"
            id="prev-btn"
            onClick={sliederButton}
            className={styles.prevbtn}
          ></button>
          <div className={styles.Carousel}>
            <div id="item-list" class={styles.itemList}>
              {/* Items  */}
              <img
                id="item"
                class={styles.item}
                src={ad1}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad2}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad3}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad4}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad5}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad6}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad7}
                alt="Media Articles"
              />

              <img
                id="item"
                class={styles.item}
                src={ad8}
                alt="Media Articles"
              />
              <img
                id="item"
                class={styles.item}
                src={ad9}
                alt="Media Articles"
              />
              <img
                id="item"
                class={styles.item}
                src={adx}
                alt="Media Articles"
              />
            </div>
          </div>
          <button
            type="button"
            id="next-btn"
            onClick={sliederButton}
            className={styles.nextbtn}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default PressNMedia;
