import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../Componenets/Footer/Footer";
import Header from "../../Componenets/Header/Header";
import ProductCart from "../../Componenets/ProductCart/ProductCart";
import SecFour from "../../Componenets/SecFour/SecFour";
import SecOne from "../../Componenets/SecOne/SecOne";
import SecThree from "../../Componenets/SecThree/SecThree";
import SecTwo from "../../Componenets/SecTwo/SecTwo";
import styles from "../Home/Home.module.scss";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToBasket = (item) => {
    axios.post('https://664d9087ede9a2b55653ebb7.mockapi.io/basket/basket', item)
  }

  const addToWishlist = (item) => {
    axios.post('https://664d9087ede9a2b55653ebb7.mockapi.io/basket/basket', item)
  }


  return (
    <div>
      <Header />
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
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
            data.map((item) => <ProductCart key={item.id} item={item}  addToBasket={() => addToBasket(item)}  addToWishlist={()=>addToWishlist (item)}  />)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
