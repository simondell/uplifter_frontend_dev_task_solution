import React, {
  useEffect,
  useState,
} from 'react';
import mockFeed from './__mocks__/example_feed.json'

export interface FeedItem {
  title: string
  link: string
  media: { m: string } 
  date_taken: string 
  description: string 
  published: string
  author: string 
  author_id: string
  tags: string 
}

function App() {
  const [feedItems, setFeedItems] = useState([] as FeedItem[])

  useEffect(() => {
    setFeedItems(mockFeed.items)
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Uplifter Test Solution</h1>
      </header>
      <main>
      {
        feedItems.map(feedItem =>
          <div
            key={`${feedItem.link}`}
          >
            {feedItem.media.m}
          </div>
        )
      }
      </main>
    </div>
  );
}

export default App;
