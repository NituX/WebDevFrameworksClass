import React from 'react'
import styles from './Notifications.module.css'

export default function Notifications(props) {
    return (
        <div className={styles.container}>
            <div className={styles.rightNow}> JUURI NYT </div>
            <span className={styles.header}> {props.topic}: </span> <span className={styles.header}> {props.body} </span>
            
        </div>
    )
}
