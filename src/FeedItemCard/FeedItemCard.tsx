import React from 'react'
import { FeedItem } from '../App/App'
import './FeedItemCard.css'

interface FeedItemCardProps {
  feedItem: FeedItem
}

export function getAuthorName (rawAuthor: string): string | null {
  const matches = /\("([\w ]+)"\)/.exec(rawAuthor)
  
  if(!matches) return matches

  return matches[1]
}

export default function FeedItemCard (props: FeedItemCardProps) {
  const { feedItem } = props

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