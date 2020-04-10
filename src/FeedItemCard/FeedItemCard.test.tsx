import React from 'react';
import { render } from '@testing-library/react';
import FeedItemCard from './FeedItemCard';
import mockFeed from '../App/__mocks__/example_feed.json'


test('renders the photo title', () => {
  const mockItem = mockFeed.items[0]
  const { getByText } = render(
    <FeedItemCard
      feedItem={mockItem}
    />
  );

  const headingElement = getByText(new RegExp(mockItem.title));

  expect(headingElement).toBeInTheDocument();
});

// test('renders a main', () => {
//   const { getByRole } = render(<FeedItemCard />);

//   const mainElement = getByRole(/main/i);

//   expect(mainElement).toBeInTheDocument();
// });
