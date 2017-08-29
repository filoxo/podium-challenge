import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
	    <Router>
		    <div>
			    <ul>
				    <li><Link to="/">Home</Link></li>
			    </ul>
			    <hr/>
			    <Route exact path="/" render={() => <div>Reviews</div>}/>
			    <Route path="/review/:id" render={() => <div>REVIEW</div>}/>
		    </div>
	    </Router>
    );
  }
}

export default App;
