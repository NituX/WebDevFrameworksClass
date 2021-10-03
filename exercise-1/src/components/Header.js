import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.brand}> PASKALEHTI </div>
                    <div className={styles.location}> Oulu </div>
                    <div className={styles.weather}>
                        <img src='/images/saa.png' alt='saakuva'/>
                         10 
                         <span>&#176;</span> </div>
            <div className={styles.login}>
                <div> KIRJAUDU <img src='/images/LoginUkko.png' alt='loginukko'/> </div>
            </div>
        </div>

    )
}
