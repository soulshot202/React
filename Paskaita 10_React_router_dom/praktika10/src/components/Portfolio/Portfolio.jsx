import React from "react";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <section>
        <img src="https://cdn.pixabay.com/photo/2023/04/19/19/46/gosling-7938451_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2023/10/16/06/21/white-butterfly-8318526_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2023/10/01/19/47/ducks-8288033_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg" />
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" />
      </section>
    </div>
  );
}
