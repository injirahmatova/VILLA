import React from "react";
import styles from "../../Componenets/SecOne/SecOne.module.scss";
const SecOne = () => {
  return (
    <div className={styles.secOne}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h1>
            Welcome to <span> Villa</span> resort
          </h1>
          <p>Discover our world-class hotel & restaurant resort.</p>
          <div className={styles.btns}>
            <button className={styles.pink}>Explore The Beauty</button>
            <button className={styles.transparent}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecOne;
