import React from 'react'
import styles from './MainFeed.module.css';

export default function MainFeed(props) {
    return (
        <div className={styles.container}>
            <div><img className={styles.image} src={`/images/${props.picture}`} />
                <div className={styles.topic}>{props.topic}</div>
                <div className={styles.genre}>{props.genre} - {props.time}</div>
            </div>
        </div>
    )
}