import axios from 'axios'
import React, {
  useEffect,
  useState,
} from 'react'
import { FeedItem } from '../App/App'
import './FeedItemCard.css'

type Photo = {} | null

interface FeedItemCardProps {
  feedItem: FeedItem
}

export default function FeedItemCard (props: FeedItemCardProps) {
  const { feedItem } = props

  const [photo, setPhoto] = useState(null as Photo)

  useEffect(() => {
    let ignore = false

    if(!feedItem) return

    (async function getPhoto () {
      if(ignore) return

      const photoId = getPhotoId(feedItem.link)
      const key = process.env.REACT_APP_FLICKR_KEY
      const path = `https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${key}&photo_id=${photoId}&format=json&nojsoncallback=1`
      try {
        const response = await axios(path)
        capturePhoto(response.data)
      }
      catch(err) {
        console.error(err)
      }
    })()

    return () => { ignore = true }
  }, [])

  function capturePhoto (data: any) {
    setPhoto({
      ...photo,
      ...data
    })
  }

  return (
    <article
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      <img
        alt=""
        src={feedItem.media.m}
        title={feedItem.title}
      />
      <header>
        <h2>
          <a
            href={feedItem.link}
          >
            {feedItem.title}
          </a> by <span>
            {getAuthorName(feedItem.author)}
          </span>
        </h2>
      </header>
      {/*<div
        dangerouslySetInnerHTML={{__html: feedItem.description}}
      />*/}
    </article>
  )
}

export function getAuthorName (rawAuthor: string): string | null {
  const matches = /\("([\w ]+)"\)/.exec(rawAuthor)
  
  if(!matches) return matches

  return matches[1]
}

export function getPhotoId (rawPhotoPath: string): string | null {
  const matches = /\/\d+\/$/.exec(rawPhotoPath)

  if(!matches) return matches

  return matches[1]
}
