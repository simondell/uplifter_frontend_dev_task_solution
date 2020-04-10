import React from 'react'
import { FeedItem } from '../App/App'

interface FeedItemCardProps {
  feedItem: FeedItem
}

export function getAuthorName (rawAuthor: string): string | null {
  const matches = /\("([\w ]+)"\)/.exec(rawAuthor)
  
  if(!matches) return matches

  return matches[1]
}

export default function FeedItemCard (props: FeedItemCardProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      <header>
        <h2>
          <a
            href={props.feedItem.link}
          >
            {props.feedItem.title}
          </a> by <span>
            {getAuthorName(props.feedItem.author)}
          </span>
        </h2>
      </header>
    </article>
  )
}