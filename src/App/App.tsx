import jsonp from 'jsonp'
import React, {
  useEffect,
  useState,
} from 'react';
import './App.css'
import FeedItemCard from '../FeedItemCard/FeedItemCard'
import mockFeed from './__mocks__/example_feed.json'

export type Feed = null | {
  title: string
  link: string
  description: string
  modified: string,
  generator: string,
  items: FeedItem[]
}

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
  const [feed, setFeed] = useState(null as Feed)
  // const [photos, setPhotos] = useState([] as FeedItem[])

  useEffect(() => {
    const path = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
    jsonp(
      path,
      { param: 'jsoncallback' },
      captureFeed
    )
  })

  function captureFeed(feedData: any) {
    setFeed(mockFeed)
  }

  return (
    <>
      <header
        role="banner"
      >
        <h1>Uplifter Test Solution</h1>
      </header>
      <section
        role={"main"}
      >
        {feed &&
          feed.items.map(feedItem =>
            <FeedItemCard
              key={`${feedItem.link}`}
              feedItem={feedItem}
            />
          )
        }
      </section>
    </>
  );
}

export default App;
