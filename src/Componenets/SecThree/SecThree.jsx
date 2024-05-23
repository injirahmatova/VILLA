import React from "react";
import styles from "../SecThree/SecThree.module.scss";
const SecThree = () => {
  return (
    <div className={styles.secThree}>
      <div className={styles.containerThree}>
        <div className={styles.textThree}>
          <h1>A gorgeous place to enjoy your life.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </div>
        <div className={styles.photo}>
            <img src="https://preview.colorlib.com/theme/villa/img/slider-6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecThree;
