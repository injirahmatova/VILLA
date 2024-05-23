import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";
const CardBasket = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src={item?.thumbnail} alt="img" />
        <div className={styles.text}>
          <h4>{item?.title}</h4>
          <p>{item?.price}</p>
          <button onClick={sil}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
