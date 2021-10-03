import React from 'react'
import styles from './MostReadCard.module.css'

export default function MostReadCard(props) {
    return (
        <div className = {styles.topic}>
            {props.topic}
        </div>
    )
}
