import React, { Component } from 'react';
import FetchResponse from './api/FetchResponse';
import ReviewCard from './component/ReviewCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FetchResponse endpoint="http://shakespeare.podium.co/api/reviews">
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
      </div>
    );
  }
}

export default App;
