import React, {
  useEffect,
  useState,
} from 'react';
import './App.css'
import FeedItemCard from '../FeedItemCard/FeedItemCard'
import mockFeed from './__mocks__/example_feed.json'

export type FeedItem = {
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
  }, [setFeedItems])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Uplifter Test Solution</h1>
      </header>
      <section
        role={"main"}
      >
        {
          feedItems.map(feedItem =>
            <FeedItemCard
              key={`${feedItem.link}`}
              feedItem={feedItem}
            />
          )
        }
      </section>
    </div>
  );
}

export default App;
