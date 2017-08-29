import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import FetchResponse from './FetchResponse'
import fetchMock from 'fetch-mock'

beforeAll(() => {
  fetchMock.get('*', { hello: 'world' })
})

it('renders an element', () => {
  const div = document.createElement('div')
  const PASS = 'PASS'
  ReactDOM.render(
    <FetchResponse
      children={({ fetching, data }) => {
        if (fetching) {
          expect(data).toBeNull()
        } else {
          expect(data).not.toBeNull()
        }
        return <div>{PASS}</div>
      }}
    />,
    div
  )
})
