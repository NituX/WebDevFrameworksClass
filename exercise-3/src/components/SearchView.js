import React from 'react'
import SearchResult from './SearchResult.js'
import styles from './SearchView.module.css'


export default function SearchView(props) {
    return (
        <div className = {styles.searchView}>
            {
            props.items.map(item => <SearchResult className={styles.result} key={item.id} {...item} />)
            }
        </div>
    )
}