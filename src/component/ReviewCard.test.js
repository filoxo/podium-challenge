import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ReviewCard from './ReviewCard';

it('renders without crashing', () => {
	shallow(<ReviewCard/>);
});