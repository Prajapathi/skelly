import React from 'react'
import styles from '../styles/login.module.scss';

import paypal from '../assets/images/paypal.png'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'
import maestro from '../assets/images/maestro.png'
import discover from '../assets/images/discover.jpg'
import ideal from '../assets/images/ideal.png'

const Login = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <div className={styles.form_container}>
                    <div>
                        <div className={styles.ctas}>
                            <button className={`${styles.cta} ${styles.selected}`}>Log&nbsp;&nbsp;in</button>
                            &nbsp;&nbsp;&nbsp;
                            <button className={styles.cta}>Sign&nbsp;&nbsp;up</button>
                        </div>
                        <span className={styles.sidehead}>Shipping information</span>
                        <div className={styles.shippingform}>
                            <input type="text" name='email' placeholder='Email' />
                            <input type="text" name='address' placeholder='Address' />
                            <input type="text" name='firstname' placeholder='First Name' />
                            <input type="text" name='city' placeholder='City' />
                            <input type="text" name='lastname' placeholder='Last Name' />
                            <input type="text" name='zip' placeholder='Postal Code / ZIP' />
                            <input type="text" name='phone' placeholder='Phone Number' />
                            <input type="text" name='country' list='countries' value='Poland' />
                            <datalist id="countries">
                                <option value="Poland" />
                                <option value="Germany" />
                                <option value="Austria" />
                            </datalist>
                        </div>
                    </div>


                    <div className={styles.payanddel}>

                        {/* Payment Methods  */}

                        <h3>Payment Method</h3>
                        <div className={styles.payment}>
                            <label htmlFor="Paypal" className={styles.label}>
                                <input type="radio" name="pay" id="Paypal" value='paypal' />
                                <div
                                    className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${paypal})` }}>
                                </div>
                            </label>
                            <label htmlFor="Visa" className={styles.label}>
                                <input type="radio" name="pay" id="Visa" value='visa' />
                                <div
                                    className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${visa})` }}>
                                </div>
                            </label>
                            <label htmlFor="Mastercard" className={styles.label}>
                                <input type="radio" name="pay" id="Mastercard" value='mastercard' />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${mastercard})` }}>
                                </div>
                            </label>
                            <label htmlFor="Maestro" className={styles.label}>
                                <input type="radio" name="pay" id="Maestro" value='maestro' />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${maestro})` }}>
                                </div>
                            </label>
                            <label htmlFor="Discover" className={styles.label}>
                                <input type="radio" name="pay" id="Discover" value='discover' />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${discover})` }}>
                                </div>
                            </label>
                            <label htmlFor="Ideal" className={styles.label}>
                                <input type="radio" name="pay" id="Ideal" value='ideal' />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${ideal})` }}>
                                </div>
                            </label>
                        </div>

                        {/*  Delivery Methods*/}

                        <h3>Delivery Method</h3>
                        <div className={styles.delivery}>
                            <label htmlFor="inpost" className={styles.label}>
                                <input type="radio" name="pay" id="inpost" value='inpost' />
                                <div className={styles.radiobtn}>
                                    <div style={{}}>

                                    </div>
                                    <div style={styles.price}>
                                        $20.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="dpd" className={styles.label}>
                                <input type="radio" name="pay" id="dpd" value='dpd' />
                                <div
                                    className={styles.radiobtn}>
                                    <div style={{}}>
                                    </div>
                                    <div style={styles.price}>
                                        $12.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="dhl" className={styles.label}>
                                <input type="radio" name="pay" id="dhl" value='dhl' />
                                <div className={styles.radiobtn}>
                                    <div style={{}}></div>
                                    <div className={styles.price}>
                                        $15.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="fedex" className={styles.label}>
                                <input type="radio" name="pay" id="fedex" value='fedex' />
                                <div className={styles.radiobtn}>
                                    <div style={{}}></div>
                                    <div className={styles.price}>
                                        $10.00
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className={styles.cart}>
                        <div className={styles.items}>
                            <div className={styles.item}>

                            </div>
                            <div className={styles.item}>

                            </div>
                        </div>
                        <div className={styles.total}>

                        </div>
                        <div className={styles.message}>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
