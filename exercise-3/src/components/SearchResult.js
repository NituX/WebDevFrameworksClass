import React from 'react'
import styles from './SearchResult.module.css'
import StarRating from './StarRatePure'

export default function SearchResult(props) {

    const splitPrice = value => {
        const [dollar, penny] = String(value).split('.');
        return [dollar, penny]
    }

    return (
        <div className={styles.icontainer}>
            <div>
                {
                    props.banner != null ? <div className={styles.banner}> <p>{props.banner}</p> </div> : <div className={styles.emptybanner}/>
                }       
            </div>
            
            <div className={styles.imageContainer}> <img className={styles.image} src={`/images/${props.image}`} alt="" /> </div>
            <a href={"home"}>{props.name}</a>
            <div>by {props.by}</div>
            <div className={styles.rating}>
                <StarRating selectedStars={props.rating} />
                <div>{props.ratingcount} </div>
            </div>
            <div className={styles.price}>
                ${splitPrice(props.price).at(0)}
                <span> {splitPrice(props.price).at(1)} </span>
            </div>
        </div>
    )
}