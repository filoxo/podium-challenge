import React from 'react'
import StarRating from './StarRating';

const ReviewCard = ({id, author, rating, publish_date}) => 
    <div style={{
    	display: 'flex',
	    margin: '3px',
	    boxShadow: '0 1px 3px rgba(0,0,0,.3)'
    }}>
        <StarRating rating={rating}/>
        <div style={{marginLeft: '12px'}}>
            <h3>{author}</h3>
            <p>Published: {new Date(publish_date).toLocaleString()}</p>
        </div>
    </div>

export default ReviewCard