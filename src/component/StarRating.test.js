import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import StarRating from './StarRating';

it('renders without crashing', () => {
	shallow(<StarRating/>);
});

it('renders a rating span', () => {
	const wrapper = mount(<StarRating rating={5.0}/>)
	expect(wrapper.find('span').length).toEqual(1);
	expect(wrapper.text()).toEqual('5 ★')
});