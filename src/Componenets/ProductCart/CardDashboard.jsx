import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";

const CardDashboard = ({ item, sil, }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={item?.thumbnail} alt="img" />
        <div className={styles.text}>
          <h4>{item?.title}</h4>
          <p>{item?.price}</p>
          <span>{item?.description}</span>
          <div className={styles.btns}>
            <button onClick={sil}>Delete</button>
            <button >Add To Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDashboard;
