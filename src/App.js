import React, { Component } from 'react';
import FetchResponse from './api/FetchResponse';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FetchResponse endpoint="http://shakespeare.podium.co/api/reviews">
          {({fetching, data}) => (
            fetching 
              ? <div>Fetching data...</div> 
              : <div>Has data: {JSON.stringify(data)}</div>
          )}
        </FetchResponse> 
      </div>
    );
  }
}

export default App;
