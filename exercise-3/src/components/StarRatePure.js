import React from 'react'
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {

    const createArray = length => [...Array(length)];

    const Star = ({ selected = false, onSelect = f => f }) => (
        <BsStarFill color={selected ? "#e6ac00" : "grey"} />
    );

    const HalfStar = ({ selected = false, onSelect = f => f }) => (
        <BsStarHalf color={selected ? "#e6ac00" : "grey"} />
    );

    const EmptyStar = ({ selected = false, onSelect = f => f }) => (
        <BsStar color={selected ? "#e6ac00" : "grey"} />
    );

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                i < selectedStars && i + 1 > selectedStars ?
                    <HalfStar
                        key={i}
                        selected={true}
                    />
                    : i < selectedStars ?
                        <Star
                            key={i}
                            selected={true}
                        />
                        :
                        <EmptyStar
                            key={i}
                            selected={true}
                        />
            ))}
        </>
    )
}
