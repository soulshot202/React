import React from "react";
import Image from "../Image/Image";
import style from "./Main.module.css";

export default function Main() {
  return (
    <div className={style.main}>
      <h3>Portfolio</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
        exercitationem. Iusto, eveniet magni? At libero doloribus similique
        beatae veritatis repellendus reprehenderit voluptatum laboriosam nihil
        inventore! Nisi eaque recusandae consequatur mollitia?
      </p>

      <div>
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2017/08/01/18/31/green-2567172_1280.jpg"
          description={"Beautifull picture"}
        />
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2018/01/31/15/42/blue-3121354_1280.jpg"
          description={"Beautifull picture"}
        />
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2017/09/22/10/25/rain-2775032_1280.jpg"
          description={"Beautifull picture"}
        />
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2022/06/06/17/56/flowers-7246619_1280.jpg"
          description={"Beautifull picture"}
        />
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2018/04/04/21/35/cherry-blossom-3291200_1280.jpg"
          description={"Beautifull picture"}
        />
        <Image
          imgSrc="https://cdn.pixabay.com/photo/2013/11/28/10/01/abstract-219915_1280.jpg"
          description={"Beautifull picture"}
        />
      </div>
    </div>
  );
}
