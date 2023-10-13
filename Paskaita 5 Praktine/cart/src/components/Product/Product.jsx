import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Product.module.css";

export default function Product({
  image,
  title,
  price,
  description,
  availability,
  category,
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.product}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.info}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <img src={"https://static.thenounproject.com/png/4725611-200.png"} />
        </div>

        <p className={styles.price}>{price}€</p>
        <p className={styles.description}>{description}</p>
        <p>
          <span className={styles.availability1}>Availability: </span>
          <span className={styles.availability}>{availability}</span>
        </p>
        <div className={styles.quantity}>
          <div className={styles.quantityButtons}>
            <div
              onClick={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
              }>
              -
            </div>
            <div>{quantity}</div>
            <div
              onClick={() =>
                quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10)
              }>
              +
            </div>
          </div>

          <Button text="ADD TO CART" />
        </div>

        <p className={styles.category}>Category: {category}</p>
      </div>
    </div>
  );
}
