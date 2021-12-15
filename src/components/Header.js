import React from 'react'
import styles from '../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faStore} className={styles.icon} /> &nbsp;&nbsp;
                E-shop
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Kids</a></li>
                </ul>
            </nav>
            <div className={styles.utils}>
                <FontAwesomeIcon className={styles.menu} icon={faSearch} />
                <FontAwesomeIcon className={styles.menu} icon={faShoppingCart} />
                <FontAwesomeIcon className={styles.menu} icon={faUser} />
            </div>
        </header>
    )
}

export default Header
