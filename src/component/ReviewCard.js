import React from 'react'
import StarRating from './StarRating';

const ReviewCard = ({id, author, rating, publish_date}) => 
    <div>
        <StarRating rating={rating}/>
        <div>
            <h3>{author}</h3>
            <p>Published: {new Date(publish_date).toLocaleString()}</p>
        </div>
    </div>

export default ReviewCard