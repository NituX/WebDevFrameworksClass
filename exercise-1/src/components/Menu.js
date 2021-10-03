import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <nav id={'main-nav'}>
        <div className={styles.navContainer}>
            <div className={styles.mainNavContainer}>
            <div className={styles.mainNav}>
            <ul>
                <li><a href='Etusivu'>Etusivu</a></li>
                <li><a href='Uutiset'>Uutiset</a></li>
                <li><a href='Urheilu'>Urheilu</a></li>
                <li><a href='Viihde'>Viihde</a></li>
                <li><a href='Sää'>Sää</a></li>
                <li><a href='IL-TV'>IL-TV</a></li>
                <li><a href='Raha'>Raha</a></li>
                <li><a href='Terveys'>Terveys</a></li>
                <li><a href='Hyvä olo'>Hyvä olo</a></li>
                <li><a href='Tyyli.com'>Tyyli.com</a></li>
                <li><a href='Asuminen'>Asuminen</a></li>
                <li><a href='Perhe'>Perhe</a></li>
                <li><a href='Pippuri.fi'>Pippuri.fi</a></li>
                <li><a href='Matkailu'>Matkailu</a></li>
                <li><a href='Autot'>Autot</a></li>
                <li><a href='Digi'>Digi</a></li>
                </ul>
                </div>

                <img className={styles.magglasimage} src={"/images/suurlasi.png"} alt={"lasi"}/>
                <img className={styles.hamburgerimage} src={"/images/MenuLines.png"} alt={"lines"}/>

                 
                </div>
                

        

        <div className={styles.subNavMenu}>
            <ul>
                <li> <a href="/Tuoreimmat"> Tuoreimmat</a> </li>
                <li> <a href="/Luetuimmat"> Luetuimmat </a> </li>
                <li> <a href="/Sensuroimatonpäivärinta"> Sensuroimaton päivärinta </a> </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}
 /*
 <div className={styles.subMenu}>
                <div className={styles.subItem}> Tuoreimmat </div>
                <div className={styles.subItem}> Luetuimmat </div>
                <div className={styles.subItem}> Sensuroimaton päivärinta </div>
            </div>
            */