import React from 'react';
import { render } from '@testing-library/react';
import FeedItemCard, { getAuthorName } from './FeedItemCard';
import mockFeed from '../App/__mocks__/example_feed.json'


test('renders the photo title', () => {
  const mockItem = mockFeed.items[0]

  const { getByText } = render(
    <FeedItemCard
      feedItem={mockItem}
    />
  );

  const itemTitle = getByText(new RegExp(mockItem.title));
  expect(itemTitle).toBeInTheDocument();
});

test('renders a link to the photo\'s page on flickr' , () => {
  const mockItem = mockFeed.items[0]

  const { getByText } = render(
    <FeedItemCard
      feedItem={mockItem}
    />
  );

  const itemTitle = getByText(new RegExp(mockItem.title));
  expect(itemTitle.closest('a').href).toBe(mockItem.link);
});

test('renders the author\'s username' , () => {
  const mockItem = mockFeed.items[0]

  const { getByText } = render(
    <FeedItemCard
      feedItem={mockItem}
    />
  );

  const author = getByText('haberlerdenizli');
  expect(author).toBeInTheDocument()
});

test.skip('renders a link to the author\'s page on flickr' , () => {
  const mockItem = mockFeed.items[0]

  const { getByText } = render(
    <FeedItemCard
      feedItem={mockItem}
    />
  );

  const itemTitle = getByText('haberlerdenizli');
  expect(itemTitle.closest('a').href).toBe(mockItem.link);
});

describe('getAuthorName()', () => {
  test('extracts name from author strings', () => {
    const exampleName = mockFeed.items[0].author // "nobody@flickr.com (\"haberlerdenizli\")"

    expect(getAuthorName(exampleName)).toEqual('haberlerdenizli')
  })
})