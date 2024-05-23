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
    axios.delete(`https://664f0f4bfafad45dfae223d9.mockapi.io/basket/basket`);
    setTimeout(() => {
      getData();
    }, 500);
  };

  return (
    <div>
      <Header />
      <div className={styles.title}>
        <h2>Recent Blog Post</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
        <div className={styles.products}>
          {data &&
            data.map((item) => <CardBasket key={item.id} item={item} sil={()=>deleteItem(item.id)} />)}
        </div>
      </div>
    </div>
  );
};

export default Basket;
