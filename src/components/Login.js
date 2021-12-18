import React, { useState } from 'react'
import styles from '../styles/form.module.scss';

import paypal from '../assets/images/paypal.png'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'
import maestro from '../assets/images/maestro.png'
import discover from '../assets/images/discover.jpg'
import ideal from '../assets/images/ideal.png'

import inpost from '../assets/images/Delivery/inpost.png'
import dpd from '../assets/images/Delivery/dpd.jpg'
import dhl from '../assets/images/Delivery/dhl.png'
import fedex from '../assets/images/Delivery/fedex.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

import model1 from '../assets/images/profiles/model1.jpg'
import model2 from '../assets/images/profiles/model2.jpg'

const Login = () => {

    const [log, setLog] = useState(true)
    const [formData, setFormData] = useState({});

    console.log({ formData });

    const handlechange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }




    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <div className={styles.form_container}>
                    <div>
                        <div className={styles.ctas}>
                            <button type='button' className={`${styles.cta} ${log && styles.selected}`}
                                onClick={() => setLog(true)}>Log&nbsp;&nbsp;in</button>
                            &nbsp;&nbsp;&nbsp;
                            <button type='button' className={`${styles.cta} ${!log && styles.selected}`}
                                onClick={() => setLog(false)}>Sign&nbsp;&nbsp;up</button>
                        </div>
                        <span className={styles.sidehead}>Shipping information</span>
                        <div className={styles.shippingform}>
                            <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handlechange} required />
                            <input type="text" name='address' placeholder='Address' value={formData.address} onChange={handlechange} required />
                            <input type="text" name='firstname' placeholder='First Name' value={formData.firstname} onChange={handlechange} required />
                            <input type="text" name='city' placeholder='City' value={formData.city} onChange={handlechange} required />
                            <input type="text" name='lastname' placeholder='Last Name' value={formData.lastname} onChange={handlechange} required />
                            <input type="text" name='zip' placeholder='Postal Code / ZIP' value={formData.zip} onChange={handlechange} required />
                            <input type="text" name='phone' placeholder='Phone Number' value={formData.phone} onChange={handlechange} required />
                            <input type="text" name='country' list='countries' value={formData.country} onChange={handlechange} required />
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
                                <input type="radio" name="pay" id="Paypal" value='paypal' onChange={handlechange} required />
                                <div
                                    className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${paypal})` }}>
                                </div>
                            </label>
                            <label htmlFor="Visa" className={styles.label}>
                                <input type="radio" name="pay" id="Visa" value='visa' onChange={handlechange} required />
                                <div
                                    className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${visa})` }}>
                                </div>
                            </label>
                            <label htmlFor="Mastercard" className={styles.label}>
                                <input type="radio" name="pay" id="Mastercard" value='mastercard' onChange={handlechange} required />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${mastercard})` }}>
                                </div>
                            </label>
                            <label htmlFor="Maestro" className={styles.label}>
                                <input type="radio" name="pay" id="Maestro" value='maestro' onChange={handlechange} required />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${maestro})` }}>
                                </div>
                            </label>
                            <label htmlFor="Discover" className={styles.label}>
                                <input type="radio" name="pay" id="Discover" value='discover' onChange={handlechange} required />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${discover})` }}>
                                </div>
                            </label>
                            <label htmlFor="Ideal" className={styles.label}>
                                <input type="radio" name="pay" id="Ideal" value='ideal' onChange={handlechange} required />
                                <div className={styles.radiobtn}
                                    style={{ backgroundImage: `url(${ideal})` }}>
                                </div>
                            </label>
                        </div>

                        {/*  Delivery Methods*/}

                        <h3>Delivery Method</h3>
                        <div className={styles.delivery}>
                            <label htmlFor="inpost" className={styles.label}>
                                <input type="radio" name="delivery" id="inpost" value='inpost' onChange={handlechange} required />
                                <div className={styles.radiobtn}>
                                    <div style={{ backgroundImage: `url(${inpost})` }}
                                        className={styles.deliverypic}></div>
                                    <div style={styles.price}>
                                        $20.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="dpd" className={styles.label}>
                                <input type="radio" name="delivery" id="dpd" value='dpd' onChange={handlechange} required />
                                <div className={styles.radiobtn}>
                                    <div style={{ backgroundImage: `url(${dpd})` }}
                                        className={styles.deliverypic}></div>
                                    <div style={styles.price}>
                                        $12.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="dhl" className={styles.label}>
                                <input type="radio" name="delivery" id="dhl" value='dhl' onChange={handlechange} required />
                                <div className={styles.radiobtn}>
                                    <div style={{ backgroundImage: `url(${dhl})` }}
                                        className={styles.deliverypic}></div>
                                    <div className={styles.price}>
                                        $15.00
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="fedex" className={styles.label}>
                                <input type="radio" name="delivery" id="fedex" value='fedex' onChange={handlechange} required />
                                <div className={styles.radiobtn}>
                                    <div style={{ backgroundImage: `url(${fedex})` }}
                                        className={styles.deliverypic}></div>
                                    <div className={styles.price}>
                                        $10.00
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.sidehead}>Your Cart</h3>
                        <div className={styles.cart}>
                            <div className={styles.items}>
                                <div className={styles.item}>
                                    <div className={styles.profile}>
                                        <img src={model1} alt="" />
                                    </div>
                                    <div className={styles.name}>
                                        <p> T - Shirt Summer Vibes</p>
                                        <p className={styles.id}>#261311</p>
                                    </div>
                                    <div className={styles.cost}>
                                        <p>$89.99</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.profile}>
                                        <img src={model2} alt="" />
                                    </div>
                                    <div className={styles.name}>
                                        <p>Basic Slim Fit T - Shirt</p>
                                        <p className={styles.id}>#212315</p>
                                    </div>
                                    <div className={styles.cost}>
                                        <p>$69.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.total}>
                                Total cost &nbsp;&nbsp;&nbsp;&nbsp; <span>$159.98</span>
                            </div>
                            <div className={styles.message}>
                                <FontAwesomeIcon icon={faTruck} />
                                <span>
                                    You are $30.03 away from free Shipping
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.submitbuttons}>
                    <button type='button' className={styles.cta}>Continue Shopping</button>
                    <button type='submit' className={styles.cta + " " + styles.selected}>Proceed to Payment</button>
                </div>
            </form>
        </div>
    )
}

export default Login
