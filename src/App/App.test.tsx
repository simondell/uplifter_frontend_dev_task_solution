import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a header', () => {
  const { getByText } = render(<App />);

  const headingElement = getByText(/Uplifter Test Solution/i);

  expect(headingElement).toBeInTheDocument();
});

test('renders a main', () => {
  const { getByRole } = render(<App />);

  const mainElement = getByRole(/main/i);

  expect(mainElement).toBeInTheDocument();
});
