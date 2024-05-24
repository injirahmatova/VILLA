import React from 'react'
import styles from '../SecFour/SecFour.module.scss'
const SecFour = () => {
  
    return (
      <div className={styles.secFour}>
        <div className={styles.containerFour}>
          <div className={styles.textFour}>
            <h2>Recent Blog Post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>
          <div className={styles.cardsFour}>
            <div className={styles.cardFour}> 
              <img
                src="https://preview.colorlib.com/theme/villa/img/img_2.jpg"
                alt=""
              />
              <div className={styles.content}>
                <span>FEBRUARY 26, 2018</span>
                <h2>Five Reasons to Stay at Villa Resort</h2>
                 </div>
            </div>
            <div className={styles.cardFour}>
              <img
                src="https://preview.colorlib.com/theme/villa/img/img_2.jpg"
                alt=""
              />
              <div className={styles.content}>
                <span>FEBRUARY 26, 2018</span>
                <h2>Five Reasons to Stay at Villa Resort</h2>
                 </div>
            </div>
            <div className={styles.cardFour}>
              <img
                src="https://preview.colorlib.com/theme/villa/img/img_2.jpg"
                alt=""
              />
              <div className={styles.content}>
                <span>FEBRUARY 26, 2018</span>
                <h2>Five Reasons to Stay at Villa Resort</h2>
                 </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default SecFour