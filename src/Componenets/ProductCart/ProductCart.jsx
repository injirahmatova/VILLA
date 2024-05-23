import React from "react";
import styles from "../ProductCart/ProductCart.module.scss";
const ProductCart = ({ item, addToCart, addToWish }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={item?.thumbnail} alt="img" />
        <div className={styles.text}>
          <h4>{item?.title}</h4>
          <p>{item?.price}</p>
          <div className={styles.btns}>
            <button onClick={addToCart}>Add To Cart</button>
            <button onClick={addToWish}>Add To Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
