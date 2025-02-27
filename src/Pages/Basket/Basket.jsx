import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Componenets/Header/Header";
import CardBasket from "../../Componenets/ProductCart/CardBasket";
import styles from "../Basket/Basket.module.scss";

const Basket = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://664f0f4bfafad45dfae223d9.mockapi.io/basket/basket")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(
      `https://664f0f4bfafad45dfae223d9.mockapi.io/basket/basket/${id}`
    );

    

    setTimeout(() => {
      getData();
    }, 1000);
  };

  return (
    <div>
      <Header />

      <div className={styles.title}>
        <h1>BASKET</h1>
      </div>
      <div className={styles.products}>
        {data &&
          data.map((item) => (
            <CardBasket
              key={item.id}
              item={item}
              sil={() => deleteItem(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Basket;
