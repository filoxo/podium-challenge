import React from 'react'
import { shallow, mount } from 'enzyme'
import ReviewTable from './ReviewTable'

it('renders without crashing', () => {
	shallow(<ReviewTable />)
})
it('renders with props', () => {
	const review = {
		"rating": 3.2,
		"publish_date": "2016-09-04T23:25:47.642388Z",
		"id": "9793364045824",
		"body": "Can one desire too much of a good thing?.",
		"author": "Fay Lemke"
	}
	const wrapperInstance = shallow(<ReviewTable {...review} />).instance()
	expect(wrapperInstance.props.rating).toEqual(review.rating)
	expect(wrapperInstance.props.publish_date).toEqual(review.publish_date)
	expect(wrapperInstance.props.id).toEqual(review.id)
	expect(wrapperInstance.props.author).toEqual(review.author)
	expect(wrapperInstance.props.body).toEqual(review.body)
})

it('renders props to rows', () => {
	const review = {
		"rating": 3.2,
		"publish_date": "2016-09-04T23:25:47.642388Z",
		"id": "9793364045824",
		"body": "Can one desire too much of a good thing?.",
		"author": "Fay Lemke"
	}
	const wrapper = shallow(<ReviewTable {...review} />)
	expect(wrapper.find('StarRating').length).toEqual(1)
	const tableRows = wrapper.find('td')
	expect(tableRows.get(1).props.children.join('')).toEqual('Author: Fay Lemke')
	expect(tableRows.get(2).props.children.join('')).toEqual('Published: 9/4/2016, 5:25:47 PM')
	expect(tableRows.get(3).props.children).toEqual('Can one desire too much of a good thing?.')
})
