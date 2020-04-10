import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import jsonp from 'jsonp'

jest.mock('jsonp')

test('renders a header', () => {
  const { getByText } = render(<App />)

  const headingElement = getByText(/Uplifter Test Solution/i)

  expect(headingElement).toBeInTheDocument()
});

test('renders a main', () => {
  const { getByRole } = render(<App />)

  const mainElement = getByRole(/main/i)

  expect(mainElement).toBeInTheDocument()
});

test('when initially renders, should call on jsonp', () => {

})