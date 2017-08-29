import React from 'react'
import FetchResponse from '../api/FetchResponse'
import ReviewCard from '../component/ReviewCard'

const HomeRoute = () => <FetchResponse endpoint="http://shakespeare.podium.co/api/reviews">
	{({fetching, data}) => (
		fetching
			? <div className="textCenter">Fetching data...</div>
			: <main style={{
				margin: '0 auto',
				maxWidth: '400px',
				padding: '10px 0'
			}}>
				{ data.map((review) => <ReviewCard key={review.id} {...review}/>) }
			</main>
	)}
</FetchResponse>

export default HomeRoute