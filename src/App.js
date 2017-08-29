import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import HomeRoute from './routes/HomeRoute'
import ReviewRoute from './routes/ReviewRoute'
import './App.css';

class App extends Component {
  render() {
    return (
	    <Router>
		    <div>
			    <nav style={{padding: '8px'}}>
				    <Link to="/">Home</Link>
			    </nav>
			    <hr/>
			    <Route exact path="/" component={HomeRoute}/>
			    <Route path="/review/:id" component={ReviewRoute}/>
		    </div>
	    </Router>
    );
  }
}

export default App;
