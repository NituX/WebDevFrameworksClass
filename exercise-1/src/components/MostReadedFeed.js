import React from 'react';
import MostReadCard from './MostReadCard';
import styles from './MostReadedFeed.module.css';

export default function MostReadedFeed(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Luetuimmat
            </div>
            <button className={styles.active}>
                Juuri nyt
            </button>
            <button>
                24 tuntia
            </button>
            <button >
                Viikko
            </button>
            <hr/>
            <ol>
                {
                    props.topics.map((element, i) =>
                        <li>                            
                            {element.topic}
                            <hr />
                        </li>
                    )
                }
            </ol>
        </div>
    )
}
