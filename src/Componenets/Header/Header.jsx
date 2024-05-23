import React from 'react'
import styles from '../../Componenets/Header/Header.module.scss'
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
const navigation=useNavigate('')  

  return (
    <div className={styles.header}>
<div className={styles.container}>
    <div className={styles.logo} >
       <a href="">Villa</a>
    </div>
    <div className={styles.icons} >
    <CiHeart onClick={() => navigation ('/')} style={{fontSize:30, color:'white'}}/>
    <FaShoppingBasket onClick={() => navigation ('/')} style={{fontSize:30, color:'white'}} />
    <MdOutlineDashboard onClick={() => navigation ('/')} style={{fontSize:30, color:'white'}}/>

    </div>
</div>

    </div>
  )
}

export default Header