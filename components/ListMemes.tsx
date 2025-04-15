"use client"

import { useEffect, useState } from "react"

import { MemeCard } from "./MemeCard"
import { SkeletonCard } from "./Skeletons"

import { useMemes } from "@/hooks"

const ListMemes = () => {
  const { memes } = useMemes()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient)
    return (
      <ul className="masonry-container">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </ul>
    )

  return (
    <ul className="masonry-container">
      {memes.map((meme) => (
        <MemeCard key={meme.id} {...meme} />
      ))}
    </ul>
  )
}

export { ListMemes }
