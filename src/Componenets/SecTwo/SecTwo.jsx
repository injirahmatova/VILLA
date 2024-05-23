import React from "react";
import styles from "../SecTwo/Sectwo.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const SecTwo = () => {
  return (
    <div className={styles.secTwo}>
      <div className={styles.containerTwo}>
        <div className={styles.text}>
          <h2>YOU CAN VISIT</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="https://preview.colorlib.com/theme/villa/img/img_1.jpg"
              alt=""
            />
            <div className={styles.content}>
              <h3>Food & Wines</h3>
              <div className={styles.icons}>
                <div className={styles.star}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <span>3,239 reviews</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://preview.colorlib.com/theme/villa/img/img_1.jpg"
              alt=""
            />
            <div className={styles.content}>
              <h3>Resort & Spa</h3>
              <div className={styles.icons}>
              <div className={styles.star}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <span>3,239 reviews</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://preview.colorlib.com/theme/villa/img/img_1.jpg"
              alt=""
            />
            <div className={styles.content}>
              <h3>Hotel Rooms</h3>
              <div className={styles.icons}>
              <div className={styles.star}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <span>3,239 reviews</span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://preview.colorlib.com/theme/villa/img/img_1.jpg"
              alt=""
            />
            <div className={styles.content}>
              <h3>Yacht Club</h3>
              <div className={styles.icons}>
              <div className={styles.star}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <span>3,239 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
