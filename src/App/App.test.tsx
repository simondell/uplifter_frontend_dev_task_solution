import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a header', () => {
  const { getByText } = render(<App />);

  const headingElement = getByText(/Uplifter Test Solution/i);

  expect(headingElement).toBeInTheDocument();
});

test('renders a main', () => {
  const { getByText } = render(<App />);

  const mainElement = getByText(/Hello, world/i);

  expect(mainElement).toBeInTheDocument();
});
