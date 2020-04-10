import React from 'react'
import { FeedItem } from '../App/App'

interface FeedItemCardProps {
  feedItem: FeedItem
}

export default function FeedItemCard (props: FeedItemCardProps) {
  return (
    <div
      key={`${props.feedItem.link}`}
    >
      {props.feedItem.title}
    </div>
  )
}