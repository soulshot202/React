import React from "react";
import styles from "./Main.module.css";
import Image from "../Image/Image";

export default function Main() {
  return (
    <div>
      <h1> Photo Gallery</h1>
      <p>This is my Photo Gallery</p>
      <div className={styles.container}>
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/09/29/17/27/dunlin-8284260_1280.jpg"
          }
          descriptionText={"Dunlin"}
        />
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/10/03/08/31/tree-8290838_1280.jpg"
          }
          descriptionText={"Tree"}
        />
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/09/29/17/27/dunlin-8284260_1280.jpg"
          }
          descriptionText={"Dunlin"}
        />
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/10/03/08/31/tree-8290838_1280.jpg"
          }
          descriptionText={"Tree"}
        />
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/09/29/17/27/dunlin-8284260_1280.jpg"
          }
          descriptionText={"Dunlin"}
        />
        <Image
          imageSource={
            "https://cdn.pixabay.com/photo/2023/10/03/08/31/tree-8290838_1280.jpg"
          }
          descriptionText={"Tree"}
        />
      </div>
    </div>
  );
}
