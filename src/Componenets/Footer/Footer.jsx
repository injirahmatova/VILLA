import React from 'react'
import styles from '../Footer/Footer.module.scss'
import { CiHeart } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.contFour}>
            <p>2024 All rights reserved | This template is made with <CiHeart /> by Colorlib</p>
        <div className={styles.iconss}>
        <FaTripadvisor />
        <TfiFacebook />
        <FaTwitter />

        </div>
        </div>
    </div>
  )
}

export default Footer