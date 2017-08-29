import React from 'react'
import FetchResponse from '../api/FetchResponse'

const ReviewRoute = ({ match }) => (
  <FetchResponse
    endpoint={`http://shakespeare.podium.co/api/reviews/${match.params.id}`}
  >
    {({ fetching, data }) =>
      fetching ? (
        <div className="textCenter">Retrieving review...</div>
      ) : data !== null ? (
        <div
          style={{
            margin: '0 auto',
            maxWidth: '400px',
            padding: '10px 0'
          }}
        >
          {JSON.stringify(data)}
        </div>
      ) : (
        <div className="textCenter">
          Oops! A review with ID{' '}
          <span style={{ fontWeight: 'bold' }}>{match.params.id}</span> was not
          found.
        </div>
      )}
  </FetchResponse>
)

export default ReviewRoute
