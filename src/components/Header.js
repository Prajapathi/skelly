import React from 'react'
import styles from '../styles/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header className={styles.header}>
            <h3>Shipping and Payment</h3>
            <div className={styles.track}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                &nbsp;&nbsp;
                <div className={styles.hr}></div>
                &nbsp;&nbsp;
                <div className={`${styles.icon} ${styles.selected}`} style={{ background: 'green', color: 'white' }}>
                    <FontAwesomeIcon icon={faTruck} />
                </div>
            </div>
        </header>
    )
}

export default Header