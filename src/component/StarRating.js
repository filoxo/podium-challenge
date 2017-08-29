import React from 'react'

function getRatingColor(value) {
  // rating from 0 to 5
  // hsl range 10 to 45
  // Inspired by https://dribbble.com/shots/3416731-Nimber-Decimal-rating
  return `hsl(${value * 7 + 10}, 100%, 50%)`
}

const StarRating = ({ rating }) => (
  <span
    style={{
      alignItems: 'center',
      backgroundColor: getRatingColor(rating),
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '20px',
      fontWeight: 'bold',
      justifyContent: 'center',
      minWidth: '55px',
      padding: '10px',
      textShadow: 'rgba(0,0,0,.3) 0 0 2px, rgba(0,0,0,.3) 0 0 5px'
    }}
  >
    {rating} ★
  </span>
)

export default StarRating
