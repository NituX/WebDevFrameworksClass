import React from 'react'
import styles from './UpperBar.module.css'

export default function UpperBar() {
    return (
        <div className={styles.mainupper}>
            <div className={styles.daycontainer}>
            <span>Friday</span>
            <span>17.9.2021</span>
            <span>Aila, Aili</span>
            </div>
            
            <div className={styles.links}> 
            <a href='ÄKKILÄHDÖT'>ÄKKILÄHDÖT</a>
            <a href='E-KONTAKTI'>E-KONTAKTI</a>
            <a href='TELKKU'>TELKKU</a>
            <a href='KOTIKOKKI'>KOTIKOKKI</a>
            <a href='ETUA'>ETUA</a>
            <a href='KATTOKORKO'>KATTOKORKO</a>
            <a href='NÄKÖISLEHTI'>NÄKÖISLEHTI</a>
            </div>
            <div className={styles.almalogo}>
                <a href='alma'> <img src='/images/Alma.png' alt='almalogo'/></a>
            </div>
        </div>
    )
}
