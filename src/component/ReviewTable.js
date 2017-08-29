import React from 'react'
import StarRating from './StarRating'
import './ReviewTable.css'

const ReviewTable = ({ id, author, rating, publish_date, body }) => (
	<table className="table"><tbody>
		<tr>
			<td><StarRating rating={rating}/></td>
		</tr>
		<tr>
			<td>Author: {author}</td>
		</tr>
		<tr>
			<td>Published: {new Date(publish_date).toLocaleString()}</td>
		</tr>
		<tr>
			<td style={{fontSize: '20px'}}>{body}</td>
		</tr>
	</tbody></table>
)

export default ReviewTable
