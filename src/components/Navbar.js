import React from 'react'
import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <a href="/">
                    <FontAwesomeIcon icon={faStore} className={styles.icon} /> &nbsp;&nbsp;
                    E-shop
                </a>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                </ul>
            </nav>
            <div className={styles.utils}>
                <FontAwesomeIcon className={styles.menu} icon={faSearch} />
                &nbsp;
                <FontAwesomeIcon className={styles.menu} icon={faShoppingCart} />
                &nbsp;
                <FontAwesomeIcon className={styles.menu} icon={faUser} />
            </div>
        </div>
    )
}

export default Navbar
