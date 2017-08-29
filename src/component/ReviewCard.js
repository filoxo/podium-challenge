import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from './StarRating';

const ReviewCard = ({id, author, rating, publish_date}) => 
    <div style={{
    	display: 'flex',
	    margin: '3px',
	    boxShadow: '0 1px 3px rgba(0,0,0,.3)'
    }}>
        <StarRating rating={rating}/>
        <div style={{
        	marginLeft: '12px',
	        flex: '1',
	        padding: '6px 12px 6px 0'
        }}>
            <h3>{author}</h3>
            <p>Published: {new Date(publish_date).toLocaleString()}</p>
		        <div className="textRight">
			        <Link to={`/review/${id}`}>See full review...</Link>
		        </div>
        </div>
    </div>

export default ReviewCard