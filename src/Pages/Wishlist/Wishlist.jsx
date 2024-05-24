import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Componenets/Header/Header";
import CardWishlist from "../../Componenets/ProductCart/CardWishlist";

import styles from "../Wishlist/Wishlist.module.scss";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://664f0f4bfafad45dfae223d9.mockapi.io/basket/wishlist")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(
      `https://664f0f4bfafad45dfae223d9.mockapi.io/basket/wishlist/${id}`
    );
    setTimeout(() => {
      getData();
    }, 1000);
  };

  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h1>WISHLIST</h1>
      </div>
      <div className={styles.products}>
        {data &&
          data.map((item) => (
            <CardWishlist
              key={item.id}
              item={item}
              sil={() => deleteItem(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
