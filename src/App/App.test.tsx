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

test('when initially renders, should call on jsonp, passing the path', () => {
  render(<App />)

  expect(jsonp).toHaveBeenCalled()

  const path = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
  expect((jsonp as jest.Mock).mock.calls[0][0]).toEqual(path)
})