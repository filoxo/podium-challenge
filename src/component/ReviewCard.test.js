import React from 'react'
import { shallow, mount } from 'enzyme'
import ReviewCard from './ReviewCard'

it('renders without crashing', () => {
  shallow(<ReviewCard />)
})
it('renders with props', () => {
  const review = {
    rating: 0.8,
    publish_date: '2016-09-05T23:25:47.642350Z',
    id: '9783221620868',
    author: 'Kaley Schiller'
  }
  const wrapperInstance = shallow(<ReviewCard {...review} />).instance()
  expect(wrapperInstance.props.rating).toEqual(review.rating)
  expect(wrapperInstance.props.publish_date).toEqual(review.publish_date)
  expect(wrapperInstance.props.id).toEqual(review.id)
  expect(wrapperInstance.props.author).toEqual(review.author)
})

it('renders props to elements', () => {
  const review = {
    rating: 0.8,
    publish_date: new Date('2016-09-05T23:25:47.642350Z').toLocaleString(),
    id: '9783221620868',
    author: 'Kaley Schiller'
  }
  const wrapper = shallow(<ReviewCard {...review} />)
  expect(wrapper.find('StarRating').length).toEqual(1)
	console.log(wrapper.find('h3').node.props.children)
  expect(wrapper.find('h3').node.props.children).toEqual(review.author)
  expect(wrapper.find('p').node.props.children.join('')).toEqual(
    `Published: ${review.publish_date}`
  )
})
