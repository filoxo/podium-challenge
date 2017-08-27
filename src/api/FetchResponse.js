import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_PODIUM_API_KEY

export default class FetchResponse extends Component {
	state = {
		fetching: true,
		data: null
	}
	componentDidMount() {
		if(API_KEY !== undefined) {
			fetch(this.props.endpoint, {
				headers: {
					'Authorization': API_KEY,
					'Content-Type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(({data}) => { 
				this.setState({fetching: false, data})
			})
		} else {
			this.setState({fetching: false})
		}
	}
	render() {
		return this.props.children(this.state)
	}
}
